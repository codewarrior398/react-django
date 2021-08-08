import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailBlog from "./components/Detail/DetailBlog";
import Home from "./components/pages/Home/Home";

const Routers = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={DetailBlog} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
