import React from 'react'

// IMPORT STYLE
import './Panel.scss'

const Panel = (props) => {

	let valueColor = props.color

	return (
		<section className="panel">
			<p style={{ color: valueColor }}>{ props.value }</p>
			<p> { props.label }</p>
		</section>
	)
}

export default Panel