import React, { Component } from 'react';
import * as api from '../../utils/api'

// STYLE
import './Widget.scss';

// IMAGES
// import lobbyIcon from '../../assets/images/lobby_icon.png'
// import rankedIcon from '../../assets/images/ranked_icon.png'
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
			serverInfo: [],
			serversList: [],
			gamesList: [],
		}
	}

	componentWillMount() {
        api.getAll()
			.then(res => this.setState({
				serversInfo: res["4fun"],
				gamesList: res["games"],
				serversList: res["4fun"].servers }))
    }

    render() {
        return (
			<div className="widget">
				<Topbar></Topbar>

				{/* SECTION TO PRESENT SERVER BOXES AND GAMES PANELS */}
				{/* { console.log(this.state.serversList.length) } */}
				<section className="mid-section">
					<ServersContainer
						areaTitle={this.state.serverInfo.title}
						iconURL={funIcon}
						serversList={this.state.serversList}></ServersContainer>

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

					{/* <GamesContainer
						areaTitle="ranked open"
						color="#2788c8"
						iconURL={rankedIcon}
						btnLabel="entrar na fila"
						lineNumber="15"></GamesContainer> */}
				</section>

				<Bottombar></Bottombar>
			</div>
        )
    }
}

export default Widget
