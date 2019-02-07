import React, { Component } from 'react'

// STYLE
import './GamesContainer.scss'

// COMPONENTS
import GameInfo from '../GameInfo/GameInfo'

class GamesContainer extends Component {

	// METHOD TO TURN PROP COLOR INTO A FONTCOLOR
	setColor = (color) => {
		return color
    }
    
    // METHOD TO SET TITLE ICON BASED ON AN URL
    setIcon = (url) => {
        let formatted_url = `url('${url}')`
        return {
			backgroundImage: formatted_url,
			backgroundSize: 'contain',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		}
    }

	render() {
		return (
            <section className="games-container">
                <h3><div style={this.setIcon(this.props.iconURL)}></div> {this.props.areaTitle}</h3>
                <GameInfo
                    btnLabel={this.props.btnLabel}
                    lineNumber={this.props.lineNumber}
                    mainColor={this.setColor(this.props.color)}></GameInfo>
            </section>
		)
	}
}

export default GamesContainer