import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ResetStyle, GlobalStyle } from './components/globalStyle';
import './i18n'
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/colors';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
