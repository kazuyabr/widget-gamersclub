import React from 'react'

// STYLE
import './Topbar.scss'

const Topbar = (props) => {
	
	let medalURL = "url(" + props.medalURL + ")"
	let positionURL = "url(" + props.positionURL + ")"
	let patentURL = "url(" + props.patentURL + ")"
	let playerPhoto = "url(" + props.photo + ")"

	// METHOD TO SET PROGRESS BAR PERCENTAGE
	const setProgress = (value) => {
		return `${value}%`
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

	// CHANGE THE STYLE OF EXPERTISE LEVELS
	const showExpertise = (value) => {
		if(props.expertise > value) { return { color: '#ffffff' } }
	}

	return (
		<div className="topbar">

			<section className="player-data">
				{/* PLAYER IMAGE, NAME AND ID */}
				<div className="player">
					<div className="image" style={setIcon(playerPhoto)}></div>
					<div className="info">
						<p>{props.name}</p>
						<p>GC ID: {props.id}</p>
					</div>
				</div>

				{/* PROGRESS BAR */}
				<div className="progressbar-area">
					<div className="top-levels">
						<p style={showExpertise(19)}>Casual <i className="fas fa-map-marker-alt"></i></p>
						<p style={showExpertise(65)}>Amador <i className="fas fa-map-marker-alt"></i></p>
					</div>
					<div className="progress"><div className="bar"><div style={{ width: setProgress(props.expertise) }}></div></div></div>
					<div className="bottom-levels">
						<p style={showExpertise(39)}>Competitivo <i className="fas fa-map-marker-alt"></i></p>
						<p style={showExpertise(99)}>Pro <i className="fas fa-map-marker-alt"></i></p>
					</div>
				</div>

				<div className="badgets">
					<ul>
						<li style={setIcon(medalURL)}></li>
						<li style={setIcon(positionURL)}></li>
						<li style={setIcon(patentURL)}></li>
						<li className="level-value"><p>{props.level}</p></li>
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