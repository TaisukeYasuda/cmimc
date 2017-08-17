import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import configureStore from '../configureStore';
import { initApp } from '../actions';

const store = configureStore();
initApp()(store.dispatch);

const Root = () => (
  <Provider store={ store }>
    <App />
  </Provider>
);

export default Root;
