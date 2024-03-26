import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayername] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = <input type="text" required defaultValue={playerName} />
    // btnCaption = 'Save';
  }

  return (
    <li>
      <span classNAme="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}