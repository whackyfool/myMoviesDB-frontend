import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp.js'
import Login from './Components/Login.js'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'
import Discover from './Pages/Discover.js'
import Home from './Pages/Home.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route path="/Discover">
                  <Discover/>
              </Route>
              <Route path="/SignUp">
                  <SignUp/>
              </Route>
              <Route path="/Login">
                  <Login/>
              </Route>
              <Route path="/">
                <div className="App">
                  <NavBar nextAction="DISCOVER" url="/Discover"/>
                  <Home/>
                  <Footer/>
                </div>
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
