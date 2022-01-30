import React, { useState } from "react";
import "../pages.scss";
import { TextHolder, ClickableTextChoice } from "../../components";
import introduction from "../../staticText.json";
import responses from "../../ChoiceTextAdventure.json";
import useSound from "use-sound";
import backgroundAudio from "../Audio/bensound-cute.mp3";
import { VeronaBridge } from "../images";
import { Link } from 'react-router-dom';

const Scene_1 = () => {


  const [id, setIdNumb] = useState(0);
  const [play] = useSound(backgroundAudio);
  const [player_choice, setChoice] = useState("");



  console.log(player_choice, id);
  const checkPage = () => {
    if (id === 0) {
      return introduction.staticText_introduction[0].text;
    }
    if (id === 1) {
      return introduction.staticText_introduction[1].text;
    }
    if (id === 2) {
      return introduction.staticText_introduction[2].text;
    }
    if (id === 3) {
      return introduction.staticText_gameplay[0].text;
    }
    if (id === 4 && player_choice === "") {
      return introduction.staticText_gameplay[1].text;
    }

    if (player_choice === "1a" && id === 4) {
      return introduction.staticText_gameplay[2].text;
    }
    if (player_choice === "1b" && id === 4) {
      return introduction.staticText_gameplay[3].text;
    }

    if ((id === 5 && player_choice === "1a") || player_choice === "1b") {
      return introduction.staticText_gameplay[5].text;
    }
    if (player_choice === "3b" && id === 5) {
      console.log("here");
      // END GAME!!!!
      return introduction.staticText_gameplay[6].text;
    }
    if (player_choice === "3a" || player_choice === "3c") {
        return (
            <div>
            <Link className="linkToNextScreen" to="/recipe">Start making medicine for your patient and decide his fate!</Link>
            </div>
        )
    } else
      return (
        introduction.staticText_introduction[0].text &&
        setIdNumb(0),
        setChoice("")
      );
  };

  const lastChoice = (choice) => {
      return( setIdNumb(6), setChoice(choice));
  }

  const showChoices = () => {
    if (id === 4 && player_choice === "") {
      return (
        <div>
          <ClickableTextChoice
            choice={responses.firstChoice[0].text}
            onClick={() => setChoice("1a")}
          />
          <ClickableTextChoice
            choice={responses.firstChoice[1].text}
            onClick={() => setChoice("1b")}
          />
        </div>
      );
    }
    if (id === 5 && player_choice !== "3b") {
      return (
        <div>
          <ClickableTextChoice
            choice={responses.secondChoice[0].text}
            onClick={() => lastChoice("3a")}
          />

          {/* choice 3b resets everything */}
          <ClickableTextChoice
            choice={responses.secondChoice[1].text}
            onClick={() => setChoice("3b")}
          />

          <ClickableTextChoice
            choice={responses.secondChoice[2].text}
            onClick={() => lastChoice("3c")}
          />
        </div>
      );
    }
    if (player_choice === "3b" && id === 5) {
      return (
        <button
          className="nextBtn"
          onClick={() => setIdNumb(0) && setChoice("")}
        >
          You died! Restart Game
        </button>
      );
    } else
      return (
        <button className="nextBtn" onClick={() => setIdNumb(id + 1)}>
          Next
        </button>
      );
  };

  const checkImage = () => {
    return VeronaBridge;
  };

  return (
    <div className="background">
      <div>
        <img className="sceneImageHolder" src={checkImage()} />
        <TextHolder intro_tex={checkPage()} />
        {showChoices()}
      </div>
    </div>
  );
};

export default Scene_1;
