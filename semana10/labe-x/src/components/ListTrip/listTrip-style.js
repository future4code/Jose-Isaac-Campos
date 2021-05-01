import styled from 'styled-components'

export const Main = styled.main`
    width: 90%;
    margin: 0 auto;
`

export const Content = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: .4%;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const Trip = styled.li`
    width: 26%;
    padding: 6px 16px;
    margin: .8% 0;

    background: rgba(72, 84, 96, 0.1);
    border-radius: 10px;
    & > p {
        font-size: 1.2em;
        margin: 1% 0;
        line-height: 1.4em;

        & > span {
            margin-right: 4%;
            font-weight: 500;
        }
    }
`