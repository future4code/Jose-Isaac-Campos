import React from "react";
import styled from "styled-components";

const DivMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4%;

  & > p {
    margin: 8%;
    font-size: 1.2em;
    letter-spacing: 2px;
    font-weight: 500;
    text-shadow: 6px 0px 8px #97ce4c;

    &:hover {
        cursor: pointer;
        font-weight: 600;
    }
  }
`;

export default class Main extends React.Component {
  render() {
    return (
      <DivMain>
        <p>Characters</p>
        <p>Locations</p>
        <p>Episodes</p>
      </DivMain>
    );
  }
}
