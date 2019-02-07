import React from 'react'

// IMPORT STYLE
import './BigButton.scss'

const BigButton = (props) => {

	let backgroundColor = `linear-gradient(180deg, ${props.bgColorTop} 0%, ${props.bgColorDown} 100%)`
	let bgColor = props.bgColor

	return (
		<button className="big-button" style={{ backgroundColor: bgColor , backgroundImage: backgroundColor }}>
			{ props.line > 0 ? <p className="line-value">{ props.line }</p>  : <span></span> }
			<p>{props.label}</p>
			<p>{props.line}</p>
		</button>
	)
}

export default BigButton