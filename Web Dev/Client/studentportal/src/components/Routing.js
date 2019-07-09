import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import FormApp from "./SUform";
import Landing from "./Landing";
import Jobs from "./Jobs";
import Recommended from "./Recommended";
import Favs from "./Favorites";
import Events from "./Events";

const Routing = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={FormApp} />
    <Route path="/jobs" component={Jobs} />
    <Route path="/events" component={Events} />
    <Route path="/favorites" component={Favs} />
    <Route path="/recommended" component={Recommended} />
  </Switch>
);

export default Routing;
