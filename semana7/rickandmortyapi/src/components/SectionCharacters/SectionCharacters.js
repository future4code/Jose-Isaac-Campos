import React from "react";
import styled from "styled-components";
import CardCharacter from "../CardCharacter/CardCharacter";

import { getAllCharacter, changePage } from "../../rickandmortyapi";

const DivMain = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ContainerButtonAction = styled.div`
  display: flex;
  justify-content: center;
  margin: 2% 0;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  text-align: center;
  letter-spacing: 4px;
  margin: 2%;
  background-color: rgba(247, 196, 157, 0.4);
  color: #2f4368;
  font-weight: 500;
  font-size: 1.1em;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: all 0.4s;
  cursor: pointer;
  /* font-family: 'Scwifty'; */

  &:hover {
    transition: all 0.4s;
    transform: scale(1.1);
  }
`;

export default class SectionCharacters extends React.Component {
  state = {
    info: {},
    results: [],
  };

  componentDidMount = () => {
    this.getCurrentCharacters();
  };

  getCurrentCharacters = async () => {
    const currentCharacters = await getAllCharacter();
    console.log("first page", currentCharacters);
    this.setState({ info: currentCharacters.info, results: currentCharacters.results });
  };

  nextPage = async (url) => {
    let resul = await changePage(url)

    
    resul = new Array(...resul.results)
    
    console.log(resul)

    this.setState({results: resul})
  };

  render() {
    let characters;
    if (this.state.results) {
      characters = this.state.results.map(
        (character, index) => {
          return <CardCharacter key={index} character={character} />;
        }
      );
    }
    return (
      <DivMain>
        {characters && (
          <ContainerButtonAction>
            <Button>Prev page</Button>
            <Button
              onClick={() => {
                this.nextPage(this.state.info.next);
              }}
            >
              Next page
            </Button>
          </ContainerButtonAction>
        )}
        {characters}
      </DivMain>
    );
  }
}
