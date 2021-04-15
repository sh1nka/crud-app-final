import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components Imports
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function App() {

  // Getting State of Auth

  const [isAuth, setIsAuth] = useState(false);

  const setAuth = (boolean) =>
  {
    setIsAuth(boolean);
  }

async function refreshAuth()
  {
  try {
    const response = await fetch('http://localhost:7000/auth/is-verify', {
        method: 'GET',
        headers: {token: localStorage.token}
    });

    const parseResponse = await response.json()

      // Verifying if the user is already auth
    parseResponse === true ? setIsAuth(true) : setIsAuth(false);

      //console.log(parseResponse);
  } 
  catch (err)
  {
      //console.error(err.message);
  }
}

useEffect(() => {
  refreshAuth();
});

return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route exact path='/login' render={props => !isAuth ? (<Login {...props} setAuth = { setAuth }/>) : (<Redirect to='/dashboard'/>)} />
            <Route exact path='/register' render={props => !isAuth ? (<Register {...props} setAuth = { setAuth }/>) : (<Redirect to='/login'/>)} />
            <Route exact path='/dashboard' render={props => isAuth ? (<Dashboard {...props} setAuth = { setAuth }/>) : (<Redirect to='/login'/>)} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
