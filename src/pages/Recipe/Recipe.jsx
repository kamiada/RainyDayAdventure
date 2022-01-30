import React from "react";
import "../pages.scss";
import { Link } from 'react-router-dom';

const Recipe = () => {
  return (
    <>
      <div className="recipeHolder">
        <div className="holder">
          <p className="introduction_text">
            Here is the recipe from your master: <br />
            <br />
            1. Dandelion - it's an important ingriedient of any medicine.
            <br />
            <br />
            2. Vervain - in the right dose it's very useful for treatments.{" "}
            <br />
            <br />
            3. Green powder of mixed hebs - helps with dealing with pain. <br />
            <br />
            Mix all of them in the boiling mixture which your master already
            prepared
            <br />
          </p>
        </div>
      </div>

      <div className="recipeHolder">
        <div className="holder">
          <p className="introduction_text">
            Here is the recipe for the poison from the mysterious man who knows
            who you are: <br />
            <br />
            1. Dandelion - another dandelion? You only knew that is good for the
            mediciations.
            <br />
            <br />
            2. Pokeweed berries - You know that one! Purple and sweet looking,
            are fatal for anyone who will taste them <br />
            <br />
            3. Green powder of mixed hebs - You guess, that this will help with
            hiding the pain and taste of the berries. <br />
            <br />
            You will need to mix all of that in the mixture prepared by your
            master. No matter how powerful is the mixture, you are sure that
            berries will kill the man.
            <br />
          </p>
        </div>
      </div>
      <div className="linkHolder">
      <Link className="linkToNextScreen" to="/game">Start making medicine!</Link>
      </div>

    </>
  );
};

export default Recipe;
