import React, { useState } from "react";
import "../pages.scss";
import { ClickableObject } from "../../components";
import { Table } from "../images";
import {
  Flask,
  GreenPowder,
  Vervain,
  PokeweedBerries,
  Dandelion,
} from "../../images_objects";
import { Link } from "react-router-dom";

// Right combo:
// 1. Dandelion 2. Vervain 3. Powder
//Poison
//1. Dandelion
//2. Pokeweed Berries
//3. Green Powder
const ingridientList = [];
const Game = () => {
  const chosenObject = (ingridient) => {
    ingridientList.push(ingridient);
    console.log(ingridientList);

    return console.log("clicked");
  };

  return (
    <>
      <>
        <img className="game_table" src={Table} />
        <img className="flask" src={Flask} />
        <div className="object_holder">
        <ClickableObject
          id="Dandelion"
          onClick={() => chosenObject("dandelion")}
          thisIs={Dandelion}
        />
        <ClickableObject
          id="Vervain"
          onClick={() => chosenObject("vervain")}
          thisIs={Vervain}
        />
        <ClickableObject
          id="PokeweedBerries"
          onClick={() => chosenObject("berries")}
          thisIs={PokeweedBerries}
        />
        <ClickableObject
          id="GreenPowder"
          onClick={() => chosenObject("powder")}
          thisIs={GreenPowder}
        />
        </div>
      </>
      <div className="link_holder">
      <Link className="finished" to="/final">
        Done!
      </Link>
      </div>
    </>
  );
};

export default Game;
