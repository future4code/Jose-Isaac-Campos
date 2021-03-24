import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		inputComentario: ""
	}

	onChangeComentario = (event) => {
		this.setState({inputComentario: event.target.value})
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				onChange={this.onChangeComentario}
				value={this.state.inputComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
