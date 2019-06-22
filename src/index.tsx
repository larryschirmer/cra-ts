import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import configureStore from './store';
import { MainPage } from './components';

const GlobalStyle = createGlobalStyle`
  body,
  html {
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    color: #1a1a1a;
    font-size: 10px;
  }
`;

ReactDOM.render(
  <Provider store={configureStore()}>
    <GlobalStyle />
    <MainPage />
  </Provider>,
  document.getElementById('root')
);

