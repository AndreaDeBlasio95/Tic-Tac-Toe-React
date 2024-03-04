import { useState } from "react";

export default function Player({ initialName, symbol }) {
  // array destructuring
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    // don't use the line below, it will not work immediately in React because of its asynchronous nature
    //setIsEditing(isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span>{playerName}</span>;
  //let btnCapition = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        className="fixed-width-input"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
    // two way biding value (get) and onChange (set)

    //btnCapition = "Save";
  }

  return (
    <li>
      <span>
        {editablePlayerName}
        <span>{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
