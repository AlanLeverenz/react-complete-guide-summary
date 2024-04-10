import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // need a copy of the array so the original isn't updated out of sequence for update events
  // this makes the data immutable before updating

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });
  }

  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) => (
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      </li>
    ))}
  </ol>;
}