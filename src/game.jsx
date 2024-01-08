import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./game.css";
export default Game;
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Game() {
  let Treasure = a;
  let Neutrol = a;
  let trap = a;
  let ligne = [];
  let Case = [];
  const arrayLigne = ligne.map((ligne) => <div className="ligne">{ligne}</div>);
  const arrayCase = Case.map((Case) => <div className="case">{Case}</div>);

  return (
    <>
      <p>E A sport it's in the game</p>
      <div className="tab">
        {/* ligne 1 */}
        <div className="ligne">
          <div className="case"></div>
          <div className="case"></div>
          <div className="case"></div>
        </div>
        {/* ligne 2 */}
        <div className="ligne">
          <div className="case"></div>
          <div className="case"></div>
          <div className="case"></div>
        </div>
        {/* ligne 3 */}
        <div className="ligne">
          <div className="case"></div>
          <div className="case"></div>
          <div className="case"></div>
        </div>
      </div>
    </>
  );
}
