import React from 'react'

// STYLE
import './ProgressBar.scss'

const ProgressBar = (props) => {

	const setProgress = () => {
		let progress = (props.playersIn/props.serverCapacity) * 100
		return `${progress}%`
	}

	return (
		<section className="progress-bar">
			<div>
				<p>{props.mapName}</p>
				<p>{props.playersIn}/{props.serverCapacity}</p>
			</div>
			<div className="bar"><div style={{ width: setProgress() }}></div></div>
		</section>
	)
}

export default ProgressBar