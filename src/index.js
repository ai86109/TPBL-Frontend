import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ResetStyle, GlobalStyle } from './components/globalStyle';
import './i18n'

ReactDOM.render(
  <>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
