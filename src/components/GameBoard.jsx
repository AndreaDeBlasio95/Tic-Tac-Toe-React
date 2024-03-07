export default function GameBoard({ onSelectSquare, board }) {
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
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className="row">
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <button
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                key={colIndex}
                className="game-button"
                disabled={playerSymbol !== null}
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
