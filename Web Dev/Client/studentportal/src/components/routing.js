import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import FormApp from "./SUform";

const Routing = () => (
  <Switch>
    {/* <Route exact path="/" component={homepage} /> */}
    <Route path="/login" component={Login} />
    <Route path="/signup" component={FormApp} />
  </Switch>
);

export default Routing;
