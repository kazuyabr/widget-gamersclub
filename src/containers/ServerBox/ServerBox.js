import React, { Component } from 'react'

// STYLE
import './ServerBox.scss'

// COMPONENTS
import CopyButton from '../../components/CopyButton/CopyButton';
import GoButton from '../../components/GoButton/GoButton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

class ServerBox extends Component {

	// METHOD TO SET THE MAIN COLOR FOR COMPONENT
	setMainColor = (color) => {
		return `${ this.props.mainColor }`
	}

	// METHOD TO LIMIT CHARACTERS FROM A STRING
	limitText = (text) => {
		if(text.length > 11) return text.slice(0,9) + '...'
		else return text
	}

	// METHOD TO CHECK FOR EXTRA CURRENT PLAYERS ON SERVER
	checkPlayersQuant = () => {
		if(this.props.actual && this.props.capacity) {
			if(this.props.actual > this.props.capacity) { return this.props.capacity }
			else { return this.props.actual }
		} else {
			return 0
		}
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
					<p>#{ this.props.id } - {this.limitText(this.props.title)}</p>
					<p>{this.limitText(this.props.gameType)}</p>
				</div>

				{/* BOTTOM PROGRESSBAR */}
				<div className="server-bar">
					<ProgressBar
						mapName={this.limitText(this.props.map)}
						serverCapacity={this.props.capacity}
						playersIn={this.checkPlayersQuant()}></ProgressBar>
				</div>
			</section>
		)
	}
}

export default ServerBox