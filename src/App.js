import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import { Provider } from 'react-redux';
import store from './redux/store'
import HomePage from './components/routes/HomePage'
function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
