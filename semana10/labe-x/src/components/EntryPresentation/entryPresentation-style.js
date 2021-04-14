import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    /* background-color: yellow; */
    max-height: 94%;
    height: 94%;
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`

export const Illustration = styled.img`
   width: 36vw;
   min-width: 30vw;
   margin: 0 4%;
   transition: width 0.2s;

   @media screen and (max-width: 1444px) {
       width: 44vw;
   }

   @media screen and (max-width: 1024px) {
       width: 60vw;
   }

   @media screen and (min-width: 320px) and (max-width: 767px){
        width: 76vw;
   }
`

export const ActionContainer = styled.div`
    min-width: 26%;
    height: 30%;
    margin: 0 4%;
    transition: width 0.2s;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > button {
        font-size: 1.6em;
        padding: .8em;

        @media screen and (max-width: 1024px) {
            width: 42%;
            font-size: 1.8em;
            padding: .6em;

            :last-child {
                font-size: 1.7em;
            }
        }

        @media screen and (min-width: 320px) and (max-width: 767px){
            width: 100%;
            font-size: 1.2em;

            :last-child {
                font-size: 1.1em;
                padding: .8em;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        height: auto;
        width: 94%;
        margin: 0 auto;

        flex-direction: row;
        justify-content: space-evenly;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 80%; 
        height: 30%;
        flex-direction: column;
        align-items: center;
    }
`