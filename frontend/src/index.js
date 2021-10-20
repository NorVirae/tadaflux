import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App';
import * as serviceWorker from './serviceWorker';
import {composeWithDevTools} from "redux-devtools-extension"


//import './App.css';
import './assets/scss/style.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer'

const store = createStore(rootReducer, composeWithDevTools())


const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
