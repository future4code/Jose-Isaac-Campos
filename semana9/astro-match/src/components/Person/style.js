import styled from "styled-components";

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 96%;
    padding: 0% 1.2% 2% 0%;
    margin: 6% 0;
    border-radius: 14px;

    background-color: rgba(34, 47, 62, .2);
    & > div {
        background-color: rgba(255, 255, 255, .9);
        border-radius: 14px;
    }
`

export const Photo = styled.img`
    width: 100%;
    max-height: 320px;
    border-radius: 14px;
`

export const InfoProfile = styled.div`
    margin: 5% auto;
    width: 96%;
    
    p {
        margin: 2% 0;
        color:  #0abde3;
        text-align: center;

        font-size: 1.4vw;
        letter-spacing: 1px;

        &:first-child {
            font-weight: 600;
            letter-spacing: 2px;
        }

        &:nth-child(2) {
            font-weight: 300;
            font-size: .7em;
        }

        &:last-child {
            font-size: .66em;
        }
    }
`

export const ContainerBottons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 2% 0 4% 0;
`

export const Botton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.4s;
`

export const Icon = styled.img`
    width: 22px;
`

export const Discard = styled(Botton)`
    background-color: #ff9f43;

    &:hover {
        transform: rotate(-20deg) scale(1.1);
    }
`

export const Match = styled(Botton)`
    background-color: #ee5253;

    &:hover {
        transform: rotate(20deg) scale(1.1);
    }

    img {
        width: 32px;
    }
`