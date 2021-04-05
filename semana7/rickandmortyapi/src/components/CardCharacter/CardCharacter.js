import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    border-radius: 16px;
    background-color: rgba(247, 196, 157, .4);
    width: 46%;
    margin: 2% 0;
    font-family: 'Della Respira', serif;
    transition: all .6s;
    color: #2F4368;

    &:hover {
        transform: scale(1.1);
    }

    & > img {
        width: 40%;
        height: 100%;
        border-radius: 16px;
    }

    & > div {
        padding: 14px 20px;
        width: 100%;
        letter-spacing: 2px;

        & > p {
            margin: 4% 0;

            &:last-child {
                font-size: .8em;
            }
        }

        & span {
            font-weight: bold;
            margin-right: 2%;
        }
    }
`

export default class CardCharacter extends React.Component {
    state = {
        character: {}
    }

    componentDidMount = () => {
        this.setState({character: this.props.character})
    }
    render() {
        const character = this.state.character
        return (
            <Card>
                <img src={character.image} alt={character.id} />
                <div>
                    <p><span>name: </span>{character.name}</p>
                    <p><span>status: </span>{character.status}</p>
                    <p><span>species: </span>{character.species}</p>
                    <p><span>created: </span>{character.created}</p>
                </div>
            </Card>
        )
    }
}
