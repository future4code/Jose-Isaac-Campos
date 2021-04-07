import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CardHeader from '../components/CardHeader/CardHeader'
import ChangePage from '../components/ChangePage/ChangePage'
import Card from '../components/Card/Card'

import {getMatches, Clear} from '../services/api'

export default function Matches() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        let mounted = true
        getMatches().then((matches) => {
            if (mounted) {
                setMatches(matches)
            }
        })
        return () => {mounted = false}
    }, [])

    console.log('matches: ', matches)

    const clearMatches = async () => {
        try {
            await Clear()
            setMatches([])
        } catch (error) {
            console.log('clearMatches: ', error.data.message)
        }
    }

    const renderProfiles = () => {
        return matches.map((match) => {
            return <Card profile={match} />
        })
    }


    return (
        <Main>
            <CardHeader />
            <ChangePage page={'/'}/>
            <ContainerMatches>
                {renderProfiles()}
            </ContainerMatches>
            <Button onClick={clearMatches}>Limpar</Button>
        </Main>
    )
}

const Main = styled.main`
    min-height: 80vh;
    height: 80vh;
    max-height: 80vh;
    min-width: 20vw;
    max-width: 20vw;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;

    border-radius: 20px;
    overflow: auto;

    background-color: rgba(34, 47, 62, .08);
`

const ContainerMatches = styled.div`
    margin: 2% 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    width: 100%;
    font-size: 1.6vw;
    text-transform: uppercase;
    letter-spacing: 20px;
    cursor: pointer;
    color: #ffffff;
    padding: .6% 0;
    position: fixed;
    bottom: 0px;
    background-color: rgba(34, 47, 62, .18);
    transition: all 1s;

    &:hover {
        background-color: rgba(34, 47, 62, .30);
        transform: scale(1.1); 
        transition: all 0.4s;
        letter-spacing: 10px;
    }
`
