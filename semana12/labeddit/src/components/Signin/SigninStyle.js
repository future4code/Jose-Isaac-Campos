import styled from "styled-components";
import Objects3d from "../../img/3d-object.png";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(30, 190, 172);
  background: linear-gradient(
      79deg,
      rgba(30, 190, 172, 0.99) 12%,
      rgba(52, 138, 219, 0.98) 61%,
      rgba(46, 121, 193, 0.98) 100%
    ),
    url(${Objects3d});

  position: relative;
  display: flex;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(
        112deg,
        rgba(30, 190, 172, 0.99) 12%,
        rgba(52, 138, 219, 0.98) 61%,
        rgba(46, 121, 193, 0.98) 100%
      ),
      url(${Objects3d});
  }
`;

export const SiginForm = styled.form`
  flex: 2;
  background-color: white;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: 60%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    letter-spacing: 2px;
    color: #747d8c;

    div {
      width: 100%;
      height: auto;

      p {
        margin: 2% 0;
      }

      label {
        margin: 2% 0;
      }
    }

    h2 {
      color: rgb(30, 190, 172);
      font-size: 2.4em;
      font-weight: 600;
      letter-spacing: 8px;
      text-align: center;
    }

    button {
      background-color: rgb(30, 190, 172);
      width: 60%;
      font-size: 1.4em;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    > div {
      width: 96%;
      margin-top: 4%;

      h2 {
        font-size: 1.6em;
        letter-spacing: 4px;
        margin: 30px 0;
      }

      div {
        width: 96%;
        margin: 4% auto;

        p {
          font-size: 0.9em;
        }

        label {
          height: 60px;
        }
      }

      button {
        font-size: 1.2em;
        margin: 20px 0;
        width: 70%;
        margin-bottom: 13%;
      }
    }
  }
`;

export const SigninAppresetation = styled.div`
  flex: 1;
  height: 100%;
  color: white;
  letter-spacing: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: 44%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2 {
      font-size: 3em;
      letter-spacing: 10px;
      font-weight: 600;
      text-align: center;
    }

    p {
      font-size: 1.2em;
      text-align: center;
      line-height: 1.4em;
    }

    button {
      width: 70%;
      border: 2px solid white;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    > div {
      width: 96%;

      h2 {
        font-size: 1.8em;
        letter-spacing: 8px;
        margin: 20px 0;
      }

      p {
          width: 90%;
          font-size: 1em;
          margin: 0 auto;
      }

      button {
          margin: 36px 0;
          font-size: 1.2em;
          padding: 14px;
      }
    }
  }
`;

export const ButtonAction = styled.button`
  padding: 14px;
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 30px;
  font-size: 1.2em;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
`;
