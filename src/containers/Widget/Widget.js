import React, { Component } from 'react';
import * as api from '../../utils/api'

// STYLE
import './Widget.scss';

// IMAGES
import funIcon from '../../assets/images/fun_icon.png'

// COMPONENTS
import Topbar from '../../components/Topbar/Topbar';
import Bottombar from '../../components/BottomBar/BottomBar';
import GamesContainer from '../GamesContainer/GamesContainer';
import ServersContainer from '../ServersContainer/ServersContainer';

class Widget extends Component {

	constructor(props) {
		super(props)

		this.state = {
			allInfo: [],
			playerInfo: [],
			playerInfoPosition: [],
			playerInfoMedal: [],
			serverInfo: [],
			gamesList: [],
			serversList: [],
		}
	}

	// METHOD TO SLICE LARGE NAMES
	slicePlayerName = (text) => {
		if(text !== undefined)
			if(text.length > 15) return text.slice(0, 15) + '...'
			else return text
	}

	// METHOD TO TURN EXPERTISE LEVEL INTO A NUMBER VALUE
	setExpertiseValue = (expertise) => {
		if(expertise !== undefined)
			switch(expertise) {
				case 'casual': return 20;
				case 'competitive': return 40;
				case 'amateur': return 66;
				case 'pro': return 100;
				default: return 0;
			}
	}

	componentDidMount() {
        api.getAll()
			.then(res => this.setState({
				allInfo: res,
				playerInfo: res["user"],
				playerInfoPosition: res["user"].game_position,
				playerInfoMedal: res["user"].featured_medal,
				serverInfo: res["4fun"],
				gamesList: res["games"],
				serversList: res["4fun"].servers }))
    }

    render() {
        return (
			<div className="widget">

				<Topbar
					name={this.slicePlayerName(this.state.playerInfo.name)}
					photo=""
					id={this.state.playerInfo.id}
					expertise={this.setExpertiseValue(this.state.playerInfo.expertise)}
					level={this.state.playerInfo.level}
					patentURL={this.state.playerInfo.patent}
					positionURL={this.state.playerInfoPosition.image}
					medalURL={this.state.playerInfoMedal.image}></Topbar>

				{/* SECTION TO PRESENT SERVER BOXES AND GAMES PANELS */}
				<section className="mid-section">

					{/* LIST OF SERVERS */}
					<ServersContainer
						areaTitle={this.state.serverInfo.title}
						iconURL={funIcon}
						serversList={this.state.serversList}></ServersContainer>

					{/* LIST OF GAMES ROOMS */}
					<ul>
						{ this.state.gamesList.map((item) => (
							<li key={item.title}>
								<GamesContainer
									areaTitle={item.title}
									iconURL={item.image}
									btnLabel={item.cta.title}
									lineNumber={item.cta.line}
									url={item.cta.link}
									win={item.win}
									lose={item.lose}
									matches={item.matches}
									gamesList={this.state.gamesList}></GamesContainer>
							</li>
						))}
					</ul>
				</section>

				<Bottombar
					online={this.state.allInfo.online}
					banned={this.state.allInfo.latest_banned}></Bottombar>
			</div>
        )
    }
}

export default Widget
