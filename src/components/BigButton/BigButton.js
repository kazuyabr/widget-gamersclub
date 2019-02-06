import React from 'react'

// IMPORT STYLE
import './BigButton.scss'

const BigButton = (props) => {

	let backgroundColor = props.bgColor

	return (
		<button className="big-button" style={{ background: backgroundColor }}>
			{ props.line > 0 ? <p className="line-value">{ props.line }</p>  : <span></span> }
			<p>{props.label}</p>
		</button>
	)
}

export default BigButton