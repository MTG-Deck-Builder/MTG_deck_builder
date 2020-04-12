// packages
import React from "react";
import { Route } from "react-router-dom";

// modules
import Login from "./views/Login/Login";
import "./App.scss";

function App() {
  return <Route exact path="/" component={Login} />;
}

export default App;
