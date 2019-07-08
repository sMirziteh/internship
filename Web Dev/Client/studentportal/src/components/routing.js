import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

const Routing = () => (
  <Switch>
    {/* <Route exact path="/" component={homepage} /> */}
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routing;
