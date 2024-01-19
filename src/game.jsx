import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./game.css";
export default Game;
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function melangerTableau(tableau) {
  for (let i = tableau.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
  }
}
function FinDeJeu(party) {
  // if party
}
function Game() {
  const party = [];
  const Treasure = "🍀";
  const Neutrol = "🥶";
  const trap = "💀";
  const tableauInitial = [
    Treasure,
    Neutrol,
    trap,
    Treasure,
    Neutrol,
    trap,
    trap,
    Neutrol,
    trap,
  ];

  const [tab, setTab] = useState([...tableauInitial]);
  const [grille, setGrille] = useState([]);
  const [casesCliques, setCasesCliques] = useState(
    Array(3).fill(Array(3).fill(false))
  );

  useEffect(() => {
    melangerTableau(tab);
    const nouvelleGrille = [];
    for (let i = 0; i < 3; i++) {
      const ligne = [];
      for (let j = 0; j < 3; j++) {
        ligne.push({ valeur: tab[i * 3 + j], visible: false });
      }
      nouvelleGrille.push(ligne);
    }
    setGrille(nouvelleGrille);
  }, []); // La dépendance vide fait en sorte que cet effet s'exécute une seule fois au montage initial

  const handleClick = (ligne, colonne) => {
    // Si la case n'a pas déjà été cliquée, on peut la rendre visible
    if (!casesCliques[ligne][colonne]) {
      setCasesCliques((prevCasesCliques) => {
        const nouvellesCasesCliques = prevCasesCliques.map((row) => [...row]);
        nouvellesCasesCliques[ligne][colonne] = true;
        return nouvellesCasesCliques;
      });
    }
  };

  return (
    <>
      <p>E A sport it's in the game</p>
      <div className="tab">
        {grille.map((ligne, indexLigne) => (
          <div key={indexLigne} className="ligne">
            {ligne.map((cellule, indexColonne) => (
              <div
                key={indexColonne}
                className={`case ${
                  casesCliques[indexLigne][indexColonne] ? "visible" : "cachee"
                }`}
                onClick={() => handleClick(indexLigne, indexColonne)}
              >
                {casesCliques[indexLigne][indexColonne] || cellule.visible
                  ? cellule.valeur
                  : "?"}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
