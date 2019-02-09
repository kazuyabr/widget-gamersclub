import React, { Component } from 'react'
// import * as api from '../../utils/api'

// STYLE
import './GamesContainer.scss'

// COMPONENTS
import GameInfo from '../GameInfo/GameInfo'

class GamesContainer extends Component {

    // FUNCTION TO SET MAIN COLOR BY LINE NUMBER VALUE
	setColor = () => {
		if(typeof(this.props.lineNumber) === 'number') { return "#2788c8" }
		else { return "#ddbc39" }
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
                    win={this.props.win}
                    lose={this.props.lose}
                    matches={this.props.matches}
                    url={this.props.url}
                    mainColor={this.setColor()}></GameInfo>
            </section>
		)
	}
}

export default GamesContainer