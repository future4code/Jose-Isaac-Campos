import React from 'react'
import { Main, VoteCount } from './VotingInfoStyle'

import { ReactComponent as UpArrow } from '../../icons/up-arrow.svg' 

export default function VotingInfo({voteDirection, votesCount}) {

    

    let fillColor = voteDirection === 0 ? '#747d8c' : voteDirection === 1 ? '#5352ed' : '#ff4757'
    return (
        <Main>
            <UpArrow width="20px" height="20px" fill={voteDirection >= 0 && fillColor } style={{cursor: 'pointer'}}/>
            <VoteCount>{votesCount}</VoteCount>
            <UpArrow width="20px" height="20px" fill={voteDirection <= 0 && fillColor} style={{transform: 'rotate(180deg)', cursor: 'pointer'}}/>
        </Main>
    )
}
