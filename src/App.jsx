import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevGameTurns) => {
      let currentPlayer = "X";
      if (prevGameTurns.length > 0 && prevGameTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];
      return updatedTurn;
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="player" className="highlight-player">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
