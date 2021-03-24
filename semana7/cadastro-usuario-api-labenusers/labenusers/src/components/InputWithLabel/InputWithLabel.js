import React from 'react';
import styled from 'styled-components'

const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2%;

    & > label {
        cursor: pointer;
        letter-spacing: 2px;
        font-weight: 450;
    }

    & > input {
        padding: 10px;
        font-size: 1.04em;
        margin: 2% 0;
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: 6px;
        outline-color: #ffa801;

        &:hover {
            border: 2px solid #ffa801;
        }
    }
`

export default class InputWithLabel extends React.Component {
    onChangeInput = (event) => {
        this.props.handleValue(event.target.value)
    }

    render() {
        return (
            <DivPrincipal>
                <label htmlFor={this.props.id}>
                    {this.props.label}:
                </label>
                <input 
                    id={this.props.id} 
                    value={this.props.value} 
                    onChange={this.onChangeInput}
                    type="text" 
                    placeholder={this.props.label}
                />
            </DivPrincipal>
        )
    }
}