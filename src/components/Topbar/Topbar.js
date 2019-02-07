import React from 'react'

// STYLE
import './Topbar.scss'

const Topbar = (props) => {

	// let levelIcon = "url('../../assets/images/icon_level.png')"
	
	let medalURL = "url('https://gamersclub.com.br/images/medalhas/48.png')"
	let positionURl = "url('https://gamersclub.com.br/assets/images/gaming_roles/icon-awper.svg')"
	let patentURL = "url('https://gamersclub.com.br/assets/images/patentes/patenteless.png')"

	// METHOD TO SET PROGRESS BAR PERCENTAGE
	const setProgress = (percent) => {
		return `${percent}%`
	}

	// METHOD TO FORMAT BADGETS
	let setIcon = (url) => {
		return {
			backgroundImage: url,
			backgroundSize: 'contain',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat'
		}
	}

	return (
		<div className="topbar">

			<section className="player-data">
				{/* PLAYER IMAGE, NAME AND ID */}
				<div className="player">
					<div className="image"></div>
					<div className="info">
						<p>name</p>
						{/* <p>{props.name}</p> */}
						<p>GC ID: {props.id}</p>
					</div>
				</div>

				{/* PROGRESS BAR */}
				<div className="progress">
					<div className="bar"><div style={{ width: setProgress(50) }}></div></div>
				</div>

				<div className="badgets">
					<ul>
						<li style={setIcon(medalURL)}></li>
						<li style={setIcon(positionURl)}></li>
						<li style={setIcon(patentURL)}></li>
					</ul>
				</div>
			</section>

			<section className="level">
				<div></div>
			</section>
		</div>
	)
}

export default Topbar