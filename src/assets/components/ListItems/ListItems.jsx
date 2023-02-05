import React, { useState } from "react";
import { data } from "../../data/db";
import { ListItemsContainer, ItemList } from "./styled";

function ListItems() {
  const [items, setItem] = useState(data.items);

  const handleCheck = (id) => {
    const lisItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(lisItems);
    localStorage.setItem("todolist", JSON.stringify(lisItems));
  };

  const handleDelete = (id) => {
    const deleteItems = items.filter((item) => item.id !== id );
    setItem(deleteItems);
    localStorage.setItem("todolist", JSON.stringify(deleteItems));
  };

  return (
    <ListItemsContainer>
      <ul>
        {items.map((item) => (
          <ItemList key={item.id}>
            <input
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
              type="checkbox"
            />
            <p
              style={
                item.checked === true
                  ? { textDecoration: "line-through" }
                  : null
              }
            >
              {item.name}
            </p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </ItemList>
        ))}
      </ul>
    </ListItemsContainer>
  );
}

export default ListItems;
