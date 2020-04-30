// packages
import React from "react";
import { Route, Switch } from "react-router-dom";

// modules
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Deckbuilder from "./views/Deckbuilder/Deckbuilder";
import "./App.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/deckbuilder" component={Deckbuilder} />
      </Switch>
    </>
  );
}

export default App;
