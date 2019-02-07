import React, { Component } from 'react'

// STYLE
import './ServerBox.scss'
import CopyButton from '../../components/CopyButton/CopyButton';
import GoButton from '../../components/GoButton/GoButton';

class ServerBox extends Component {

	// FUNCAO PARA ENVIAR COR PRINCIPAL - BOTAO E VALOR
	setMainColor = (color) => {
		return `${ this.props.mainColor }`
	}

	render() {
		return (
			<section className="server-box">
				{/* TOP BUTTON AREA */}
				<div className="server-links">
					<CopyButton></CopyButton>
					<GoButton></GoButton>
				</div>
				{/* SERVER INFO - ID, TITLE, GAME TYPE */}
				<div className="server-info">
					{/* <p>{ this.props.id } - { this.props.title }</p> */}
					{/* <p>{ this.props.gameType }</p> */}
					<p>#133 - Deathmatch</p>
					<p>DM FFA</p>
				</div>

				{/* BOTTOM PROGRESSBAR */}
				<div className="server-bar"></div>
			</section>
		)
	}
}

export default ServerBox