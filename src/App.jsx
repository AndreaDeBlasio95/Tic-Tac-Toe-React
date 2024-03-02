import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol>
            <li>
              <span>Player 1</span>
              <span>X</span>
            </li>
            <li>
              <span>Player 2</span>
              <span>O</span>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;
