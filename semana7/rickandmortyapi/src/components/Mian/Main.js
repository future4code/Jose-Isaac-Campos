import React from "react";
import styled from "styled-components";

import { getCharacterById, getLocationById } from "../../rickandmortyapi";
import SectionCharacters from "../SectionCharacters/SectionCharacters";

const DivMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2%;
`;

export default class Main extends React.Component {
  state = {
    entryCharacter: {},
    entryLocation: {},
  };

  componentDidMount() {
    this.getInitialDatas();
  }

  getInitialDatas = async () => {
    const character = await getCharacterById(1);
    const location = await getLocationById(1);
    this.setState({
      entryCharacter: character,
      entryLocation: location,
    });
  };

  render() {
    return (
      <DivMain>
        <SectionCharacters />
      </DivMain>
    );
  }
}
