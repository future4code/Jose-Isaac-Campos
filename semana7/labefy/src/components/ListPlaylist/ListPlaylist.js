import React from "react";
import styled from "styled-components";
import axios from "axios";

import { baseUrl, headers } from "../../parameters";

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10% 0;

  & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 { 
          font-size: 1.6em;
      }

      button {
          font-size: 1.1em;
          border: none;
          padding: 10px;
          font-family: 'PT Mono', monospace;
          background-color: #dcdde1;
          border-radius: 6px;
          transition: all .4s;
          cursor: pointer;

          &:hover {
              background-color: rgba(47, 54, 64, .2);
              transform: scale(1.04);
              transition: all 0.4s;
          }
      }
  }

  & > ul {
      list-style: none;
      width: 100%;
      margin-top: 4%;
      li { 
          display: flex;
          justify-content: space-between;
          align-items: center;

          margin: 2.4% 0;
          padding: 2%;
          background-color: #f5f6fa;
          border-radius: 8px;

          button {
              padding: 4px;
              border: none;
              font-size: 1.2em;
              color: #e84118;
              cursor: pointer;
          }
      }
  }
`;

export default class ListPlaylist extends React.Component {
  state = {
    playlist: [],
  };

  componentDidMount = () => {
    this.getAllPlaylist();
  };

  getAllPlaylist = async () => {
    try {
      const response = await axios.get(baseUrl, headers);
      this.setState({ playlist: response.data.result.list });
    } catch (error) {
      console.log(error.message);
    }
  };

  deletePlaylist = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`, headers);
      await this.getAllPlaylist()
      alert('playlist deleted successfully!')
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const playlist = this.state.playlist.map((playlist) => {
      return (
        <li key={playlist.id}>
          {playlist.name}
          <button onClick={() => {
              this.deletePlaylist(playlist.id);
            }}>X
          </button>
        </li>
      );
    });
    return (
      <DivMain>
        <div>
          <h1>Playlists</h1>
          <button onClick={this.props.changePage}>New playlist</button>
        </div>
        <ul>{this.state.playlist && playlist}</ul>
      </DivMain>
    );
  }
}
