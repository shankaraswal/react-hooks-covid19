import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Summary from "./Components/Summary";

function App() {
  return (
    <Router className='App'>
      <Router>
        <Navigation />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/summary' component={Summary} />
          </Switch>
        </div>
      </Router>
    </Router>
  );
}

export default App;
