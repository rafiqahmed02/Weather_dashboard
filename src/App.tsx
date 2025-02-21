import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './app.styled';
import Home from './pages/Home';
import {  lightTheme } from './theme';

const App: React.FC = () => {
  // const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
