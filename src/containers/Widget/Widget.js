import React, { Component } from 'react';

// STYLE
import './Widget.scss';

// IMAGES
import lobbyIcon from '../../assets/images/lobby_icon.png'
import rankedIcon from '../../assets/images/ranked_icon.png'
import funIcon from '../../assets/images/fun_icon.png'

// COMPONENTS
import Topbar from '../../components/Topbar/Topbar';
import Bottombar from '../../components/BottomBar/BottomBar';
import GamesContainer from '../GamesContainer/GamesContainer';
import ServersContainer from '../ServersContainer/ServersContainer';

class Widget extends Component {

    render() {
        return (
			<div className="widget">
				<Topbar></Topbar>

				{/* SECTION TO PRESENT SERVER BOXES AND GAMES PANELS */}
				<section className="mid-section">
					<ServersContainer
						areaTitle="4fun"
						iconURL={funIcon}></ServersContainer>

					<GamesContainer
						areaTitle="lobby"
						color="#ddbc39"
						iconURL={lobbyIcon}
						btnLabel="Ir para lobby"></GamesContainer>

					<GamesContainer
						areaTitle="ranked open"
						color="#2788c8"
						iconURL={rankedIcon}
						btnLabel="entrar na fila"
						lineNumber="15"></GamesContainer>
				</section>

				<Bottombar></Bottombar>
			</div>
        )
    }
}

export default Widget
