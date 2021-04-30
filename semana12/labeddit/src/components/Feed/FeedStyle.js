import styled from 'styled-components'

export const Main = styled.main`
    width: 40%;
    margin: 0 auto;
    min-height: 100%;
    padding: 30px 4px 4px 30px;
    box-sizing: border-box;

    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(241,242,246,1) 100%);
    border-radius: 30px 0 0 30px;

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 96%;
        padding: 10px;
        background: rgba(255,255,255,1);
        border-radius: 10px;
    }
`

export const SectionPost = styled.section`
    width: 100%;
`