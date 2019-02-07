// METHODS TO INTERACT WITH THE API
const api = 'https://gist.githubusercontent.com/LucasKauz/b2336ac5a7d3023f4b4ddb19ab8b965e/raw/905b9c1ea77e883f144dfef998e706709f3dddc0/fronendtest.json'


export const getAll = () => {
	fetch(api)
		.then(res => res.json())
		.then(data => data)
}

export const getGames = () => {
	fetch(api)
		.then(res => res.json())
		.then(data => data.games)
}

export const getUser = () => {
	fetch(api)
		.then(res => res.json())
		.then(data => data.user)
}

export const getServers = () => {
	fetch(api)
		.then(res => res.json())
		.then(data => data['4fun'])
}


// .then(res => res.json())
// .then((info) => {
// 	console.log(info)
// 	this.setState({ player: info });
// 	console.log(this.state.player
// )})