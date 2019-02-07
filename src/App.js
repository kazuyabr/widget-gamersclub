import React, { Component } from 'react';
import './App.scss';
import * as PlayerAPI from './utils/api.js'

// COMPONENTS
// import GameInfo from './containers/GameInfo/GameInfo';
import ServerBox from './containers/ServerBox/ServerBox';
import Topbar from './components/Topbar/Topbar';
import Widget from './containers/Widget/Widget';

class App extends Component {

    // constructor(props) {
    //     super(props)
        
    //     this.state = {
    //         players: null
    //     }
    // }

    state = {
        playersGamesData: null,
        playersUserData: null
    }

    componentWillMount() {
        PlayerAPI.getAll()
        PlayerAPI.getUser()
            // .then(res => this.setState(() => ({ playersUserData: res })))

        PlayerAPI.getServers()
    }
    // background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%);
    // background-color: #ddbc39;
    render() {
        return (
            <div className="app">
                <Widget></Widget>
            </div>
        )
    }
}

export default App;
