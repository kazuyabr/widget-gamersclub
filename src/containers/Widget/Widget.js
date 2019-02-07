import React, { Component } from 'react';

// STYLE
import './Widget.scss';

// COMPONENTS
import Topbar from '../../components/Topbar/Topbar';
import Bottombar from '../../components/BottomBar/BottomBar';

class Widget extends Component {

    render() {
        return (
			<div className="widget">
				<Topbar></Topbar>

				{/* SECTION TO PRESENT SERVER BOXES AND GAMES PANELS */}
				<section></section>

				<Bottombar></Bottombar>
			</div>
        )
    }
}

export default Widget
