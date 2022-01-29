import React, { useState } from "react";
import "../pages.scss";
import { TextHolder } from "../../components";
import introduction from "../../staticText.json";
import responses from "../../ChoiceTextAdventure.json";

const Scene_1 = () => {
  const [id, setIdNumb] = useState(0);

  return (
    <div className="background">
      <div>
        <TextHolder intro_tex={introduction.staticText_introduction[0].text} />
        <button onClick={() => setIdNumb(id + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Scene_1;
