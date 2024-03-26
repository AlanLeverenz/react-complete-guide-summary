import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  // FUNCTIONS
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    console.log(event)
    setPlayerName(event.target.value);
  }

  // VARIABLES
  let editablePlayerName = <span className="player-name">{playerName}</span>
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required defaultValue={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  // HTML RENDERING
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