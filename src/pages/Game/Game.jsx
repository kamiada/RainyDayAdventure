import React, { useState } from "react";
import "../pages.scss";
import { ClickableObject } from "../../components";
import { Final } from "..";
import { Table } from "../images";
import {
  Flask,
  GreenPowder,
  Vervain,
  PokeweedBerries,
  Dandelion,
} from "../../images_objects";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const ingridientList = [];
const Game = () => {
  const chosenObject = (ingridient) => {
    ingridientList.push(ingridient);
    let removeMe = document.getElementById(ingridient);
    removeMe.disabled = true;
    removeMe.style.visibility= 'hidden';
    return console.log("clicked");
  };
  const getEnding = () => {
    if (ingridientList.includes("berries")) {
      return "poison";
    }
    if (ingridientList.includes("vervain")) {
      return "helped";
    } else return "none";
  };

  return (
    <>
      <>
        <img className="game_table" src={Table} />
        <img className="flask" src={Flask} />
        <div className="object_holder">
          <ClickableObject
            id="Dandelion"
            onClick={() => chosenObject("Dandelion")}
            thisIs={Dandelion}
          />
          <ClickableObject
            id="Vervain"
            onClick={() => chosenObject("Vervain")}
            thisIs={Vervain}
          />
          <ClickableObject
            id="Berries"
            onClick={() => chosenObject("Berries")}
            thisIs={PokeweedBerries}
          />
          <ClickableObject
            id="Powder"
            onClick={() => chosenObject("Powder")}
            thisIs={GreenPowder}
          />
        </div>
      </>
      <div className="link_holder">
        <button className="linkButton" onClick={() => getEnding()}>
          <Router>
            <Switch>
              <Route exact path="/final">
                <Final />
              </Route>
            </Switch>
          </Router>
          <Link className="finished" to="/final">
            Done!
          </Link>
        </button>
      </div>
    </>
  );
};

export default Game;
