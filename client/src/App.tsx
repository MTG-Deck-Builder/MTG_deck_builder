// packages
import React from "react";
import { Route, Switch } from "react-router-dom";

// modules
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Decklist from "./views/Decklist/Decklist";
import "./App.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/decklist" component={Decklist} />
      </Switch>
    </>
  );
}

export default App;
