import React from "react";
import { Scene_1, Recipe, Game, Final, BadEnding, GoodEnding } from "..";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../pages.scss";

const Menu = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          {/* Menu page */}
          <h1>The Duality of Choice</h1>
          <Link to="/scene">Start Game</Link>
          </Route>
          <Route exact path="/scene"> 
            <Scene_1 />
          </Route>
          <Route exact path="/recipe"> 
            <Recipe />
          </Route>
          <Route exact path="/game"> 
            <Game />
          </Route>
          <Route exact path="/final"> 
            <Final />
          </Route>
          <Route exact path="/badEnding"> 
            <BadEnding />
          </Route>
          <Route exact path="/goodEnding"> 
            <GoodEnding />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Menu;
