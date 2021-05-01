import styled from "styled-components";

export const Main = styled.form`
  width: 100%;
  display: flex;
  padding: 0 6px;
  border-radius: 10px;
  flex-direction: column;
  box-sizing: border-box;

  background: rgba(46, 121, 193, 0.98);
  background: linear-gradient(
    79deg,
    #1e90ff 12%,
    rgba(52, 138, 219, 0.98) 61%,
    rgba(46, 121, 193, 0.98) 80%
  );

  textarea {
    resize: none;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    height: 100%;
  }

  label,
  textarea {
    background: rgb(30, 190, 172);
    background: linear-gradient(
      79deg,
      #1e90ff 12%,
      rgba(52, 138, 219, 0.98) 61%,
      rgba(46, 121, 193, 0.98) 100%
    );
    border-radius: 8px;
    outline: none;
    color: white;

    ::placeholder {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: 0;
    margin-bottom: 14px;
  }
`;

export const ContainerInputs = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 20px 0;

  span {
    transition: all 0.6s;
    &:hover {
      transition: all 0.6s;
      transform: scale(1.08);
      margin-left: 14px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: 14px;
  }
`;
