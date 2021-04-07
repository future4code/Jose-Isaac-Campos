import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import CardHeader from '../components/CardHeader/CardHeader'
import ChangePage from '../components/ChangePage/ChangePage'
import Card from '../components/Card/Card'
import ButtonClear from '../components/ButtonClear/ButtonClear'
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
            return <Card key={match.id} profile={match} />
        })
    }


    return (
        <Main>
            <CardHeader />
            <ChangePage page={'/'}/>
            <ContainerMatches>
                {renderProfiles()}
            </ContainerMatches>
            <ButtonClear onClick={clearMatches}>Limpar</ButtonClear>
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
