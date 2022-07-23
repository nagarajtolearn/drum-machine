import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      play(event.key.toUpperCase());
      console.log(event.key.toUpperCase());
    });
  }, []);

  const drumPads = [
    {
      keyCode: 81,
      key: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      key: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      key: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      key: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      key: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      key: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      key: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      key: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      key: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const play = (key) => {
    const audio = document.getElementById(key);
    audio.play(key);
    setActiveKey(key);
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">key pressed: {activeKey}</div>
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <button
              className="drum-pad"
              id={drumPad.keyCode}
              key={drumPad.keyCode}
              onClick={() => play(drumPad.key)}
            >
              {drumPad.key}
              <audio
                src={drumPad.url}
                className="clip"
                id={drumPad.key}
              ></audio>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
