import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');

ReactDOM.render((
  <Provider store = { store }>
    <App />
  </Provider>
), root);
serviceWorker.unregister();
