import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { configureStore, applyMiddleware, compose, createStore } from 'redux';
import store from './reducers/store'
import './index.css';
// import authReducer  from './reducers/auth';
import App from './App';


// const store = configureStore(authReducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
  </Provider>,
    </BrowserRouter>
  </React.StrictMode>
);

