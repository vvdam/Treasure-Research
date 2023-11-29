import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./game.jsx";
import TitleScreen from "./titleScreen.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TitleScreen />}></Route>
          <Route path="/hunt" element={<Game />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
