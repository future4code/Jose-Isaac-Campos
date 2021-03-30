import axios from "axios";
import React from "react";
import styled from "styled-components";

import { baseUrl, headers } from "../../parameters";

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class NewPlaylist extends React.Component {
  state = {
    name: "",
  };

  handleNameInput = (event) => {
    this.setState({ name: event.target.value });
  };

  createPlaylist = async () => {
    if (this.state.name !== "") {
      try {
        const body = {
          name: this.state.name,
        };

        await axios.post(baseUrl, body, headers);

        alert("Playlist created");
      } catch (error) {
        if (
          error.message ===
          "NewPlaylist.js:31 Request failed with status code 400"
        ) {
          alert("playlist name already in use! please have a new name");
        }

        console.log(error.message);
      }
    } else {
      alert("fill in the field: playlist name");
    }
  };

  render() {
    return (
      <DivMain>
        <h1>New playlist</h1>
        <button onClick={this.props.changePage}>Back</button>
        <label htmlFor="playlist">Playlist name:</label>
        <input
          value={this.state.name}
          onChange={this.handleNameInput}
          id="playlist"
          type="text"
        />
        <button onClick={this.createPlaylist}>create</button>
      </DivMain>
    );
  }
}
