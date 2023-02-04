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
