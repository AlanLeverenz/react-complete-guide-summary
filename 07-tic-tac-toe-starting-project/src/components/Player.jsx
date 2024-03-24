import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>
  let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required />
    btnCaption = 'Save';
  }

  return (
    <li>
      <span classNAme="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  )
}