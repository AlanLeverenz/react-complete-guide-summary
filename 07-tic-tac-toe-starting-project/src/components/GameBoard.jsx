const initialGameBoard = [
  [],
  [],
  []
];

export default function GameBoard() {
  return <ol id="game-board">
    {initialGameBoard}
  </ol>

}