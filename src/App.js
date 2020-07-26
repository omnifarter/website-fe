import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'reactstrap'
import HomePage from './components/routes/HomePage'
import MapPage from './components/routes/MapPage'
import { Route, Link, BrowserRouter as Router,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
const PrivateRoute = ({component: Component,isSignedIn, ...rest}) => {
  return (
      <Route {...rest} render={props => (
        isSignedIn ?
              <Component {...props} />
          : <Redirect to="/" />
      )} />
  );
      }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isSignedIn:false
    };
  }
  componentWillReceiveProps(){
      this.setState({isSignedIn:true})
  }
  render(){
    return (
      <div className="App">
        <Router>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute exact path="/map" component={MapPage} isSignedIn={this.state.isSignedIn} exact />
        </Router>
      </div>
    );  
  }
}

export default connect(store =>({WebSight:store.WebSight})) (App)
