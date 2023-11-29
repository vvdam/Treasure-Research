import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
export default App;
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// function App() {
//   const txtAnime = document.querySelector(".tw");

//   var app = document.getElementById("tw");

// var typewriter = new Typewriter(app, {
//   loop: true,
//   delay: 75,
//   autoStart: true,
// });
// useEffect(() => {
//   typewriter
//     .typeString("A simple yet powerful native javascript")
//     .pauseFor(300)
//     .deleteChars(10)
//     .typeString(
//       "<strong>JS</strong> plugin for a cool typewriter effect and "
//     )
//     .typeString(
//       '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
//     )
//     .pauseFor(1000)
//     .start();
// }, []);
// <Typewriter
//   onInit={(typewriter) => {
//     typewriter
//       .typeString("Hello World!")
//       .callFunction(() => {
//         console.log("String typed out!");
//       })
//       .pauseFor(2500)
//       .deleteAll()
//       .callFunction(() => {
//         console.log("All strings were deleted");
//       })
//       .start();
//   }}
// />;

// useEffect(() => {
//   const tw = document.getElementById("tw");

//   new Typewriter(tw, {
//     // strings: ["Hello World!", "Un autre texte a taper"],
//     autoStart: true,
//     loop: true,
//     onInit: (typewriter) => {
//       typewriter
//         .typeString("A simple yet powerful native javascript")
//         .pauseFor(300)
//         .deleteChars(10)
//         .typeString(
//           "<strong>JS</strong> plugin for a cool typewriter effect and "
//         )
//         .typeString(
//           '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
//         )
//         .pauseFor(1000)
//         .start();
//     },
//   });
// }, []);
// <Typewriter
//   options={{
//     strings: ["Hello World!"],
//     autoStart: true,
//     loop: true,
//   }}
//   onInit={(typewriter) => {
//     typewriter
//       .typeString("Hello World!")
//       .callFunction(() => {
//         console.log("String typed out!");
//       })
//       .pauseFor(2500)
//       .deleteAll()
//       .callFunction(() => {
//         console.log("All strings were deleted");
//       })
//       .start();
//   }}
//   id="tw"
// />;

// const typewriterRef = useRef(null);

// useEffect(() => {
//   if (typewriterRef.current) {
//     new Typewriter(typewriterRef.current, {
//       strings: [
//         "A simple yet powerful native javascript",
//         "Only 5kb Gzipped!",
//       ],
//       autoStart: true,
//       loop: true,
//       onInit: (typewriter) => {
//         typewriter
//           .typeString(typewriter.strings[0])
//           .pauseFor(300)
//           .deleteChars(10)
//           .typeString(typewriter.strings[1])
//           .pauseFor(1000)
//           .start();
//       },
//     });
//   }
// }, []);
function App() {
  const [text] = useTypewriter({
    words: ["welcome", "to", "Treasure Hunt"],
    loop: {},
  });
  return (
    <>
      <span style={{ fontSize: "2rem", fontWeight: "bold", color: "White" }}>
        {text}
      </span>
      <span style={{ color: "red" }}></span>
      <br></br>
      <br></br>
      <button
        style={{
          fontSize: "1rem",
          color: "black",
          backgroundColor: "yellow",
          // imageRendering: pixelated,
        }}
      >
        START
      </button>
    </>
  );
}
