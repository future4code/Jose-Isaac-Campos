import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {getProfile, Clear} from '../services/api'
import Person from '../components/Person/Person'
import CardHeader from '../components/CardHeader/CardHeader'
import ChangePage from '../components/ChangePage/ChangePage'
import ButtonClear from '../components/ButtonClear/ButtonClear'
import LoaderAnimation from '../components/LoaderAnimation/LoaderAnimation'

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

    const clearMatches = async () => {
      try {
          await Clear()
          await getCurrentProfile()
      } catch (error) {
          console.log('clearMatches: ', error.data.message)
      }
    }
    
    return (
        <Main>
            <CardHeader />
            <ChangePage page={'/matches'}/>
            {profile.name ? 
                <Person profile={profile} getProfile={getCurrentProfile}/>
              :
                <LoaderAnimation />
            }
            <ButtonClear onClick={() => {clearMatches()}}>Limpar</ButtonClear>
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
    position: relative;

    background-color: white;

    border-radius: 20px;
    overflow: auto;

    background-color: rgba(34, 47, 62, .08);

    @media screen and (max-width: 1024px) {
      min-width: 40vw;
      max-width: 45vw;
    }


    @media screen and (max-width: 414px) {
      min-width: 70vw;
      max-width: 80vw;
    }


`
