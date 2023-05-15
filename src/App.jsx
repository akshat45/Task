import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Client from './components/Client';
import Login from './components/Login';
import Employee from './components/Employee';
import Admin from './components/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/client" exact>
            <Client />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/employee" exact>
            <Employee />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/" exact>
            <SignUp />
          </Route>

        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App
