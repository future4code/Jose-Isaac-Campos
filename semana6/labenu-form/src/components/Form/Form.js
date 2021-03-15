import React from 'react'
import styled from 'styled-components'
import BtnAction from '../BtnAction/BtnAction'
import Questions from '../Questions/Questions'

const FormStyle = styled.form`
    background-color: #f5f6fa;
    height: 98vh;
    width: 70%;
    margin: 1vh auto;
    box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, .38);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export default class Form extends React.Component {
    state = {
        questions: [
            {
                enuciated: 'Qual o seu nome',
                type: 'open',
                answer: '',
                page: 1,
                sequence: 1,
                options: []
            },

            {
                enuciated: 'Qual sua Idade',
                type: 'open',
                answer: '',
                page: 1,
                sequence: 2,
                options: []
            },

            {
                enuciated: 'Qual seu email',
                type: 'open',
                answer: '',
                page: 1,
                sequence: 3,
                options: []
            },

            {
                enuciated: 'Qual a sua escolaridade',
                type: 'closed',
                answer: '',
                page: 1,
                sequence: 4,
                options: [
                    'Ensino médio incompleto', 
                    'Ensino médio completo', 
                    'Ensino superior incompleto', 
                    'Ensino superior completo'
                ]
            },

            {
                enuciated: 'Qual curso',
                type: 'open',
                answer: '',
                page: 2,
                sequence: 5,
                options: []
            },

            {
                enuciated: 'Qual a unidade de ensino',
                type: 'open',
                answer: '',
                page: 2,
                sequence: 6,
                options: []
            },

            {
                enuciated: 'Por que você não terminou o curo de graduação',
                type: 'open',
                answer: '',
                page: 3,
                sequence: 5,
                options: []
            },

            {
                enuciated: 'Você fez algum curso complementar',
                type: 'closed',
                answer: '',
                page: 3,
                sequence: 6,
                options: [
                    'Nenhum',
                    'Curso técnico',
                    'Curso de inglês'
                ]
            }
        ],
        stage: [
            'Dados Gerais',
            'Informações do Ensino Superior',
            'Informações gerais do ensino'
        ],
        currentPage: 1
    }

    nextPage = () => {
        console.log('passou')
        this.setState({currentPage: this.state.currentPage + 1})
    }

    render() {
        const currenPagetQuestions = this.state.questions.filter((question) => {
            return question.page === this.state.currentPage
        })

        return (
            <FormStyle>
                <Questions questions={currenPagetQuestions} stage={this.state.stage[this.state.currentPage -1]}/>
                <BtnAction nextPage={this.nextPage} />
            </FormStyle>
        )
    }
}