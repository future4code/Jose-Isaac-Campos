import styled from 'styled-components'

export const Main = styled.main`
    width: 40%;
    margin: 0 auto;
    min-height: 100%;
    padding: 4px 4px 4px 30px;
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

export const SectionComments = styled.section`
    width: 100%;

    > div, form {
        transition: all .6s;
    }

    > div:hover, form:hover {
        transition: all 0.3s;
        box-shadow: 2px 2px 8px rgba(30,14,255,.2);
        backface-visibility: hidden;

    }
`
export const SectionPostInfo = styled.section`
    width: 100%;
`