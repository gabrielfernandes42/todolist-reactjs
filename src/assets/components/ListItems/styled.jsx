import styled from "styled-components";

export const ListItemsContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: start;
  align-items: center;
  overflow-y: auto;

  ul {
    width: 100%;
    list-style: none;
    padding: 0;
  }
`;


export const ItemList = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.5rem;
  color: white;

  input {
    text-align: center;
    margin-right: 0.5rem;
  }

  p {
    flex-grow: 1;
  }

  button {
    cursor: pointer;
  }
`;