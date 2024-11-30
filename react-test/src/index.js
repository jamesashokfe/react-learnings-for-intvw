import React, { useState } from "react";
import ReactDOM from "react-dom";

function CharacterAttributes({ totalPoints }) {
  const [remainingPoints, setRemainingPoints] = useState(totalPoints);
  const [health, setHealth] = useState(0);
  const [stamina, setStamina] = useState(0);
  const [speed, setSpeed] = useState(0);

  const handleChange = (event, attribute) => {
    if (remainingPoints <= 0) {
      return;
    }

    let propSetter = null;
    let tempHealth = health;
    let tempStamina = stamina;
    let tempSpeed = speed;
    let value = parseInt(event.target.value);

    switch (attribute) {
      case "health":
        propSetter = setHealth;
        tempHealth = value;
        break;
      case "stamina":
        propSetter = setStamina;
        tempStamina = value;
        break;
      case "speed":
        propSetter = setSpeed;
        tempSpeed = value;
        break;
      default:
        break;
    }

    if ((tempHealth + tempStamina + tempSpeed) > totalPoints) {
      return;
    }
    if (value > Math.ceil(totalPoints * 0.7)) {
      return;
    }

    propSetter(value);
    setRemainingPoints(totalPoints - (tempHealth + tempStamina + tempSpeed));
  };

  return (
    <div>
      Character stats: <span id="points">{remainingPoints}</span> points left.
      <div>
        <input type="range" id="health" min="0" max={totalPoints} value={health} step="1" onChange={(e) => handleChange(e, "health")} />Health
      </div>
      <div>
        <input type="range" id="stamina" min="0" max={totalPoints} value={stamina} step="1" onChange={(e) => handleChange(e, "stamina")} />Stamina
      </div>
      <div>
        <input type="range" id="speed" min="0" max={totalPoints} value={speed} step="1" onChange={(e) => handleChange(e, "speed")} />Speed
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);