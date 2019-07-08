import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import FormApp from "./SUform";
import Landing from "./Landing";

const Routing = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={FormApp} />
  </Switch>
);

export default Routing;
