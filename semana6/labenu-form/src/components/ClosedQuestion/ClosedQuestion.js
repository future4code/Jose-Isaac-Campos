import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    margin-bottom: 14px;
    font-weight: 500;
    letter-spacing: 1px;
`

const Select = styled.select`
    padding: 6px;
    font-size: 1.1em;
`

const Option = styled.option`
    padding: 10px;
    font-size: 1em;

`

const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2%;
    width: 90%;
`

export default class ClosedQuestion extends React.Component {
    render() {
        const question = this.props.question

        const componentsOptions = question.options.map((option) => {
            return <Option key={option} value={option}>{option}</Option>
        })

        return (
            <DivFlex>
                <Label htmlFor={question.sequence}>
                {`${question.sequence}) ${question.enuciated}?`}
                </Label>
                <Select id={question.sequence}>
                    {componentsOptions}
                </Select>
            </DivFlex>
        )
    }
}