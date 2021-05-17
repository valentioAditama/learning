import React , { useState } from "react";
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} >
          <Home />
        </Route>
        <Route path="/register" exact component={Register} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        <Route path="/resetpassword" exact component={ResetPassword} />
      </Switch>
    </div>
  );
}
export default App;