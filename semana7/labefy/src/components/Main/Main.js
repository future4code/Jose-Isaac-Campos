import React from "react";
import styled from "styled-components";
import ListPlaylist from "../ListPlaylist/ListPlaylist";
import NewPlaylist from "../NewPlaylist/NewPlaylist";

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70%;
  margin: 2% auto;
  background-color: #dcdde1;
  height: 76%;
  border-radius: 20px;
  font-family: 'PT Mono', monospace;

  & > div {
      width: 70%;
  }
`;

export default class Main extends React.Component {
  state = {
    changePage: true,
  };

  changePage = () => {
    this.setState({ changePage: !this.state.changePage });
  };

  render() {
    return (
      <DivMain>
          <div>
            {this.state.changePage ? (
            <ListPlaylist changePage={this.changePage} />
            ) : (
            <NewPlaylist changePage={this.changePage} />
            )}
          </div>
      </DivMain>
    );
  }
}
