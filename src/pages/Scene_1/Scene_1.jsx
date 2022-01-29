import React, { useState } from "react";
import "../pages.scss";
import { TextHolder, ClickableTextChoice } from "../../components";
import introduction from "../../staticText.json";
import responses from "../../ChoiceTextAdventure.json";
import useSound from "use-sound";
import backgroundAudio from "../Audio/bensound-cute.mp3";
import { VeronaBridge } from "../images";

const Scene_1 = () => {
  const [id, setIdNumb] = useState(0);
  const [play] = useSound(backgroundAudio);
  const [player_choice, setChoice] = useState("");
  console.log(player_choice, id);
  const checkPage = () => {
    console.log("I am called");
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
      return introduction.staticText_gameplay[2].text && setChoice("chosen");
    }
    if (player_choice === "1b" && id === 4) {
      return introduction.staticText_gameplay[3].text && setChoice("chosen");
    }
    console.log(id);
    if (id === 5) {
      return introduction.staticText_gameplay[5].text;
    }
    if (id === 6) {
      return introduction.staticText_gameplay[6].text;
    } else return introduction.staticText_introduction[0].text && setIdNumb(0);
  };

  const showChoices = () => {
    if (id === 4) {
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
    if (id === 6 && player_choice === "chosen") {
      return (
        <div>
          <ClickableTextChoice choice={responses.secondChoice[0].text} />
          <ClickableTextChoice choice={responses.secondChoice[1].text} />
          <ClickableTextChoice choice={responses.secondChoice[2].text} />
        </div>
      );
    }
    if (player_choice === "chosen" && id === 4) {
      return (
        <button className="nextBtn" onClick={() => setIdNumb(id + 1)}>
          Next
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
        <img src={checkImage()} />
        <TextHolder intro_tex={checkPage()} />
        {showChoices()}
      </div>
    </div>
  );
};

export default Scene_1;
