import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login';
import { Signup } from './components/signup/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
