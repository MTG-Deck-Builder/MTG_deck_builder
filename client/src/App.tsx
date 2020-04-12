// packages
import React from "react";
import { Route } from "react-router-dom";

// modules
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Decklist from "./views/Decklist/Decklist";
import "./App.scss";

function App() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/decklist" component={Decklist} />
    </>
  );
}

export default App;
