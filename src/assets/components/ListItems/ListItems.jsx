import React from "react";
import { data } from "../../data/db";
import Item from "../Item/Item";
import { ListItemsContainer } from "./styled";

function ListItems({ name }) {
  return (
    <ListItemsContainer>
      <ul>
        {data.items.map((item) => (
          <Item key={item.id} title={item.name} checked={item.checked} />
        ))}
      </ul>
    </ListItemsContainer>
  );
}

export default ListItems;
