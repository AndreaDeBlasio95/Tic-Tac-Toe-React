import { useState } from "react";

export default function Player({ name, symbol }) {
  // array destructuring
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  let playerName = <span>{name}</span>;
  //let btnCapition = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" className="fixed-width-input" required value={name} />
    );
    //btnCapition = "Save";
  }

  return (
    <li>
      <span>
        {playerName}
        <span>{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
