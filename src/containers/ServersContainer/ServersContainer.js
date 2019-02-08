import React, { Component } from 'react'

// STYLE
import './ServersContainer.scss'

// COMPONENTS
import ServerBox from '../ServerBox/ServerBox'

class ServersContainer extends Component {

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
            <section className="servers-container">
                <h3><div style={this.setIcon(this.props.iconURL)}></div> {this.props.areaTitle}</h3>
                <section className="servers-section">
                    <ServerBox></ServerBox>
                    <ServerBox></ServerBox>
                    <ServerBox></ServerBox>
                </section>
            </section>
		)
	}
}

export default ServersContainer