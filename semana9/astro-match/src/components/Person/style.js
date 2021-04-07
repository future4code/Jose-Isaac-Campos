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
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Photo = styled.img`
    width: 100%;
    max-height: 320px;
    border-radius: 14px;

    @media screen and (max-width: 1024px) {
        max-height: 390px;
    }

    @media screen and (max-width: 414px) {
        max-height: 340px;
    }
`

export const InfoProfile = styled.div`
    margin: 5% 0;
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

            @media screen and (max-width: 1024px) {
                font-size: 1em;
            }
        }

        &:last-child {
            font-size: .66em;

            @media screen and (max-width: 1024px) {
                font-size: .9em;
            }
        }

        @media screen and (max-width: 1024px) {
            font-size: 3.6vw;
        }

        @media screen and (max-width: 414px) {
            font-size: 5vw;
        }
    }

    @media screen and (max-width: 1024px) {
        margin: 6% 0;
    }
`

export const ContainerBottons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 2% 0 4% 0;

    @media screen and (max-width: 1024px) {
        margin: 6% 0 0% 0;
    }

    @media screen and (max-width: 1024px) {
        margin: 4% 0 0% 0;
    }
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

    @media screen and (max-width: 1024px) {
        width: 76px;
        height: 76px;
    }

    @media screen and (max-width: 414px) {
        width: 66px;
        height: 66px;
    }
`

export const Icon = styled.img`
    width: 22px;

    @media screen and (max-width: 414px) {
        width: 18px;
    }
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

        @media screen and (max-width: 414px) {
            width: 28px;
        }
    }
`