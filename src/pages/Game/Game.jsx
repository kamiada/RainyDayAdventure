import React from "react";
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

// Right combo:
// 1. Dandelion 2. Vervain 3. Powder
//Poison
//1. Dandelion
//2. Pokeweed Berries
//3. Green Powder

const chosenObject = () => {
  return console.log("clicked");
};

const Game = () => {
  return (
    <>
      <img className="game_table" src={Table} />
      <ClickableObject id="Dandelion" onClick={() => chosenObject()} thisIs={Dandelion} />
      <ClickableObject id="Vervain" onClick={() => chosenObject()} thisIs={Vervain}/>
      <ClickableObject id="PokeweedBerries" onClick={() => chosenObject()} thisIs={PokeweedBerries}/>
      <ClickableObject id="GreenPowder" onClick={() => chosenObject()} thisIs={GreenPowder}/>

    </>
  );
};

export default Game;
