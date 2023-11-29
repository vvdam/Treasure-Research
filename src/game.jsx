import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./game.css";
export default Game;
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Game() {
  return (
    <>
      <p>E A sport the game</p>
      <div className="tab">
        {/* ligne 1 */}
        <div className="ligne">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* ligne 2 */}
        <div className="ligne">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* ligne 3 */}
        <div className="ligne">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
