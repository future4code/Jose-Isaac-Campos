import styled from 'styled-components'

export const Main = styled.main`
    width: 90%;
    margin: 0 auto;
`

export const ListTrip = styled.ul`
    width: 100%;
    margin-top: 1%;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const Trip = styled.li`
    min-width: 28%;
    width: 28%;
    margin: .8% 1%;
    padding: 20px;
    background: rgba(72, 84, 96, 0.1);
    border-radius: 6px;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 1.06em;
        span {
            margin-right: 20px;
            font-weight: 500;
        }
    }
`

export const IconAction = styled.img`
    width: 22px;
    cursor: pointer;
`

export const ContainerNewTrip = styled.div`
    width: 100%;
    /* background-color: yellow; */

    display: flex;
    justify-content: space-evenly;

    position: fixed;
    bottom: 0;
    left: 0;

    button {
        width: 28%;
        font-size: 1.4em;
        padding: .6em 0;

        display: flex;
        align-items: center;
        justify-content: center;
        color: #34ACE0;
    }
`

export const Icon = styled.img`
    width: 40px;
    margin: 0 2%;
`