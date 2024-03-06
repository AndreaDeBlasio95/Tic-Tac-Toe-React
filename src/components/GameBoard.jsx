const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  /*
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }
  */

  return (
    <ol className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex} className="row">
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <button
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                key={colIndex}
                className="game-button"
              >
                {playerSymbol}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
