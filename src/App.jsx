import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./themes/index";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";


import { useStateValue } from "./StateProvider/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue(null);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="container">
              <SideBar />
              <Routes>
                <Route path="/rooms/:roomId" element={<Chat />} />
                <Route path="/" element={<Chat />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
