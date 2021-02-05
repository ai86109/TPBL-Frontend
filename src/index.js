import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ResetStyle, GlobalStyle } from './components/globalStyle';
import './i18n'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
