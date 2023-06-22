import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/AppContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosReducer';

const store = configureStore({ reducer: todosReducer });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


