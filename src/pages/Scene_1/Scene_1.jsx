import React, { useState } from "react";
import "../pages.scss";
import { TextHolder } from "../../components";
import introduction from "../../staticText.json";
import responses from "../../ChoiceTextAdventure.json";
import useSound from "use-sound";
import backgroundAudio from "../Audio/bensound-cute.mp3";

const Scene_1 = () => {
  const [id, setIdNumb] = useState(0);
  const [play] = useSound(backgroundAudio);

  const checkPage = () => {
    if (id === 0) {
      return introduction.staticText_introduction[0].text;
    }
    if (id === 1) {
        console.log(id);
      return introduction.staticText_introduction[1].text;
    }
    if (id === 2) {
      return introduction.staticText_introduction[2].text;
    }
    else return introduction.staticText_introduction[0].text && setIdNumb(0);
  };

  return (
    <div className="background">
      <div>
        <TextHolder intro_tex={checkPage()} />
        <button onClick={() => setIdNumb(id+1)}>Next</button>
      </div>
    </div>
  );
};

export default Scene_1;
