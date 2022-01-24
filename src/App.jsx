import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import theme from "./themes/index";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";

import { useStateValue } from "./StateProvider/StateProvider";
import { useEffect, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { actionTypes } from './StateProvider/reducer';

function App() {
  const [{ user }, dispatch] = useStateValue(null);
  
  const [openChat, setOpenChat] = useState(null);
  const { width } = useWindowDimensions();
  

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    dispatch({
      type: actionTypes.SET_USER,
      user: userInfo
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (width < 541) {
      setOpenChat(false);
    } else {
      setOpenChat(null);
    }
  }, [width])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header openChat={openChat} />
            <div className="container">
              {!openChat && <SideBar setOpenChat={setOpenChat} openChat={openChat} />}
              <Routes>
                {width < 541 ? (
                  openChat && 
                  <>
                    <Route path="/rooms/:roomId" element={<Chat setOpenChat={setOpenChat} openChat={openChat} />} />
                    <Route
                      path="*"
                      element={<Navigate replace to="/rooms/vGzFAuXakczYD2OU9UF0"/>}
                    />
                  </>
                  ) : (
                    <>
                      <Route path="/rooms/:roomId" element={<Chat setOpenChat={setOpenChat} openChat={openChat} />} />
                      <Route
                        path="*"
                        element={<Navigate replace to="/rooms/vGzFAuXakczYD2OU9UF0"/>}
                      />
                    </>
                  )
                }
                
              </Routes>
            </div>
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
