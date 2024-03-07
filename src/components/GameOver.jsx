export default function GameOver({ winner }) {
  return (
    <div>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
