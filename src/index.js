import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomePage from './components/routes/HomePage'
import MapPage from './components/routes/MapPage'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
  <Provider store={store}>
  <Router>
      <Route exact path="/" component={App} />
      <Route path="/map" component={MapPage} />
  </Router>
  </Provider>

)
ReactDOM.render(
  routing,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
