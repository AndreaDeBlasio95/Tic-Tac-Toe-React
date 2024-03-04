import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol>
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>
          <GameBoard></GameBoard>
        </div>
      </main>
    </>
  );
}

export default App;
