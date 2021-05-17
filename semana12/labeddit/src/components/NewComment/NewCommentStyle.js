import styled from 'styled-components'

export const Main = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4px;
    border-radius: 10px;
    box-sizing: border-box;

    background: rgb(112,161,255);
    background: linear-gradient(90deg, rgba(112,161,255,1) 6%, rgba(30,14,255,1) 60%, rgba(102,147,232,) 100%);

    textarea {
        resize: none;
        overflow: hidden;
        border: 2px solid rgba(255, 255, 255, 0.9);
        box-sizing: border-box;
        height: 100%;
    }

    label, textarea { 
        background: rgb(112,161,255);
        background: linear-gradient(90deg, rgba(112,161,255,1) 6%, rgba(30,14,255,1) 60%, rgba(102,147,232,) 100%);
        border-radius: 8px; 
        outline: none;
        color: white;

        ::placeholder {
            color: rgba(255,255,255, .9);
        }
    }
`

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

    svg {
        width: 32px;
    }
  }
`