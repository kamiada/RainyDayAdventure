import React from "react";
import { Scene_1 } from "..";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../pages.scss";

const Menu = () => {
  return (
    <div>
      <h1>The Duality of Choice</h1>
      <Router>
        {/* <Route path="/scene1" element={<Scene_1 />} />
          <Link to="/scene1">Start Your Adventure!</Link> */}
        {/* react looks at routes and matches with the first one which it finds so / instead of the right /something  - exact prop helps with that*/}
        <Switch>
          <Route exact path="/scene">
            <Scene_1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Menu;
