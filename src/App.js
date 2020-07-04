import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage'
import JoinMeetupPage from './Pages/JoinMeetupPage'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/joinmeetup/' component={JoinMeetupPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
