// packages
import React from "react";
import { Route, Switch } from "react-router-dom";

// modules
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Deckbuilder from "./views/Deckbuilder/Deckbuilder";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "./App.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/deckbuilder" component={Deckbuilder} />
      </Switch>
    </>
  );
}

export default App;
