import React, { Component } from 'react'
// import * as api from '../../utils/api'

// STYLE
import './ServersContainer.scss'

// COMPONENTS
import ServerBox from '../ServerBox/ServerBox'

class ServersContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            serversState: [],
        }
    }

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

    componentDidMount() {
        console.log(this.props.serversList.length)
    }
    
	render() {
		return (
            <section className="servers-container">
                <h3><div style={this.setIcon(this.props.iconURL)}></div> {this.props.areaTitle}</h3>
                <ul className="servers-section">
                    { this.props.serversList.map((item) => (
                        <li key={item.id}>
                            <ServerBox
                            id={item.id}
                            title={item.title}
                            gameType={item.mode}
                            map={item.map}
                            capacity={item.max}
                            actual={item.current}></ServerBox>
                        </li>
                    ))}
                </ul>
            </section>
		)
	}
}

export default ServersContainer