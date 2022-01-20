import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import theme from './themes/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SideBar />
    </ThemeProvider>
  );
}

export default App;
