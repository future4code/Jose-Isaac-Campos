import React from 'react'
import styled from 'styled-components'

import ClosedQuestion from '../ClosedQuestion/ClosedQuestion'
import FormTitle from '../FormTitle/FormTitle'
import OpenQuestion from '../OpenQuestion/OpenQuestion'

const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export default class Questions extends React.Component {
    render() {
        console.log(this.props.questions)
        const componentsQuestions = this.props.questions.map((question, index) => {
            return question.type === 'open' ?  <OpenQuestion key={index} question={question}/> : <ClosedQuestion key={index} question={question}/>
        })
        return (
            <DivFlex>
                <FormTitle title={`ETAPA ${this.props.questions[0].page} - ${this.props.stage}`}/>
                {componentsQuestions}
            </DivFlex>
        )
    }
}