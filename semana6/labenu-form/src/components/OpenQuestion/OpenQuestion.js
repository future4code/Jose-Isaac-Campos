import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    margin-bottom: 10px;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1em;
`

const Input = styled.input`
    padding: 4px;
    font-size: 1em;
`

const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2%;
    width: 90%;
`

export default class OpenQuest extends React.Component {
    render() {
        const question = this.props.question

        return (
            <DivFlex>
                <Label htmlFor={question.sequence}>
                    {`${question.sequence}) ${question.enuciated}?`}
                </Label>
                <Input id={question.sequence}/>
            </DivFlex>
        )
    }
}