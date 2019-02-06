import React, { Component } from 'react';
import './App.scss';
import BigButton from './components/BigButton/BigButton';

class App extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            player: {}
        }
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/LucasKauz/b2336ac5a7d3023f4b4ddb19ab8b965e/raw/905b9c1ea77e883f144dfef998e706709f3dddc0/fronendtest.json')
            .then(res => res.json())
            .then(info => this.setState({ player: info }))
    }

    render() {
        return (
            <div className="app">
                {/* { this.state.player.length } */}
                <BigButton
                bgColor="lightblue"
                line="10"
                label="Hello"></BigButton>
            </div>
        )
    }
}

export default App;
