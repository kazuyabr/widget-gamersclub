import React, { Component } from 'react'

// STYLE
import './GameInfo.scss'
import Panel from '../../components/Panel/Panel';
import BigButton from '../../components/BigButton/BigButton';

class GameInfo extends Component {

	// FUNCAO PARA ENVIAR COR PRINCIPAL - BOTAO E VALOR
	setMainColor = (color) => {
		return `${ this.props.mainColor }`
	}

	render() {
		return (
			<section className="game-info">
				<div className="panes">
					<Panel mainColor={ this.setMainColor() } value="100" label="Partidas"></Panel>
					<Panel mainColor="#92AA00" value="100" label="Vitórias"></Panel>
					<Panel mainColor="#FC3537" value="100" label="Derrotas"></Panel>
				</div>
				<div className="button">
					<BigButton
	                    bgColorTop="rgba(255, 255,255, 0.25)"
	                    bgColorDown="rgba(255, 255, 255, 0)"
                    	bgColor={ this.setMainColor() }
                    	line={this.props.lineNumber}
                    	label={this.props.btnLabel}></BigButton>
				</div>
			</section>
		)
	}
}

export default GameInfo