import styled from 'styled-components'

export const Main = styled.nav`
    width: 100%;
`

export const MenuList = styled.ul`
    list-style: none;
    width: 90%;
    margin: 2% auto;

    display: flex;
    justify-content: space-between;
`

export const MenuItem = styled.li`
    background-color: #485460;
    border-radius: 6px;
    padding: 4px;

    button {
        font-size: 1.1em;
        border: none;
        color: #34ACE0;

        display: flex;
        align-items: center;

        img {
            width: 18px;
            margin-right: 10px;
        }

        @media screen and (min-width: 320px) {
            padding: 2px;
        }
    }
`