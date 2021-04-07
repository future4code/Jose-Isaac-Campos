import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {getProfile} from '../services/api'
import Person from '../components/Person/Person'
import CardHeader from '../components/CardHeader/CardHeader'
import ChangePage from '../components/ChangePage/ChangePage'

export default function Card() {
    const [profile, setProfile] = useState({})

    useEffect(() => {
      let mounted = true;

      getProfile().then((profile) => {
        if (mounted) {
          setProfile(profile);
        }
      });

      return () => {
        mounted = false;
      };
    }, []);

    const getCurrentProfile = async () => {
        const res = await getProfile()

        setProfile(res)
    }
    
    return (
        <Main>
            <CardHeader />
            <ChangePage page={'/matches'}/>
            <Person profile={profile} getProfile={getCurrentProfile}/>
        </Main>
    )
}

const Main = styled.main`
    min-height: 80vh;
    height: 80vh;
    max-height: 80vh;
    min-width: 20vw;
    max-width: 20vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;

    border-radius: 20px;
    overflow: auto;

    background-color: rgba(34, 47, 62, .08);
`
