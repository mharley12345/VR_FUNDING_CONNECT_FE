import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './layout/Home'
import Users from './layout/Users';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import Investors from './layout/Investors';
import PrivateRoute from './Auth/PrivateRoute';
import Nav from './layout/NavBar'
import AddProject from './layout/AddProject'
import User from './layout/User'
import history from  './utils/history'
// import CreateProfile from './components/Login/Signup'
function App(props) {
  const [userToken, setUserToken] =useState('')
 
  
  useEffect(() => { 
    setUserToken(localStorage.getItem("token"))
  }, [userToken]);
  return (


    <Router history={history}>

  
      <Nav className='navbar'/>
      {/* <Route path='/signup' component={CreateProfile}/> */}
      <Route exact path='/' component={Home}/>
      <Route path="/users"  component={Users} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/login" component={LoginForm} />
      <Route path= "/user/:id" render={props=><User{...props}/>}/>
      <Route path='/addproject' component={AddProject}/>
      <PrivateRoute exact path="/investors" component={Investors} />
  
    </Router>
  );
}

export default App;