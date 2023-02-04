import React, { useState } from "react";
import { ItemList } from "./styled";

function Item({ title, checked }) {
  const [hitBox, setHitbox] = useState(false);

  const handleHitBox = () => {
    setHitbox(!hitBox);
  };

  const handleDelete = () => {
    console.log("Foi clicado");
  };

  return (
    <>
      <ItemList>
        <input
          onChange={handleHitBox}
          value={hitBox}
          checked={hitBox}
          type="checkbox"
        />
        <p style={hitBox === true ? { textDecoration: "line-through" } : null}>{title}</p>
        <button onClick={handleDelete}>Delete</button>
      </ItemList>
    </>
  );
}

export default Item;
