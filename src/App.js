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
import AutoComplete from "./Components/AutoComplete";
import { CustomHook } from "./Components/CustomHook";
import { AutoCompleteHooks } from "./Components/AutoCompleteHooks";

function App() {
  return (
    <Router className='App'>
      <Router>
        <Navigation />
        <div className='container'>
          <Switch>
            <Route path='/custom' component={CustomHook} />
            <Route path='/summary' component={Summary} />
            <Route path='/auto' component={AutoComplete} />
            <Route path='/ahooks' component={AutoCompleteHooks} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    </Router>
  );
}

export default App;
