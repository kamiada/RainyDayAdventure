import React from "react";
import { Scene_1 } from "..";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../pages.scss";

const Menu = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          {/* Menu page */}
          <h1>The Duality of Choice</h1>
          </Route>
          <Route exact path="/scene"> Here
            <Scene_1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Menu;
