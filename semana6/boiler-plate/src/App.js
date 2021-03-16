import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
  list-style: none;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  display: flex;
  justify-content: space-between;
  margin: 4% 0;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Texto da primeira tarefa',
          completa: false
        },

        {
          id: Date.now(),
          texto: 'Texto da segunda tarefa',
          completa: true
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    const tarefas = this.state.tarefas
    if (tarefas) {
      localStorage.setItem('tarefasSalvas', JSON.stringify(tarefas))
    }
  };

  componentDidMount() {
    let tarefasSalvas = localStorage.getItem('tarefasSalvas')

    if (tarefasSalvas) { 
      tarefasSalvas = JSON.parse(tarefasSalvas)
      this.setState({tarefas: tarefasSalvas})
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const tarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    let novasTarefas
    if (this.state.tarefas) {
      novasTarefas = [...this.state.tarefas, tarefa]
    } else {
      novasTarefas = [tarefa]
    }

    this.setState({tarefas: novasTarefas})
  }

  deletarTarefa = (id) => {
    const tarefasFiltradas = this.state.tarefas.filter(tarefa => {
      return tarefa.id === id ? false : true
    })

    this.setState({tarefas: tarefasFiltradas})
  }

  selectTarefa = (id) => {
    let tarefas = this.state.tarefas.map(tarefa => {
      if (tarefa.id !== id) {
        return tarefa
      } else {
        tarefa.completa = !tarefa.completa
        return tarefa
      }
    })

    this.setState({tarefas: tarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    let listaFiltrada
    if (this.state.tarefas) {
      listaFiltrada = this.state.tarefas.filter(tarefa => {
        switch (this.state.filtro) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })
    }

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada && listaFiltrada.map(tarefa => {
            return (
              <Tarefa 
                completa={tarefa.completa}
              >
                <p 
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </p>
                <button onClick={() => this.deletarTarefa(tarefa.id)}>X</button>
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
