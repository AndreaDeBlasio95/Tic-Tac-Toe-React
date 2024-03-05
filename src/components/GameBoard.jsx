const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol className="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex} className="row">
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <button key={colIndex} className="game-button">
                {playerSymbol}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
