import React from 'react'

// IMPORT STYLE
import './BigButton.scss'

const BigButton = (props) => {

	let backgroundColor = `linear-gradient(180deg, ${props.bgColorTop} 0%, ${props.bgColorDown} 100%)`


	// FUNCTION TO SET MAIN COLOR BY LINE NUMBER VALUE
	let setBgcolor = () => {
		if(typeof(props.line) === 'number') { return "#2788c8" }
		else { return "#ddbc39" }
	}

	// FUNCTION TO OPEN AN URL ON ANOTHER TAB
	let setURL = (url) => {
		window.open(url, '_blank');
	}

	return (
		<button
			className="big-button"
			onClick={() => setURL(props.url)}
			style={{ backgroundColor: setBgcolor() , backgroundImage: backgroundColor }}>
			{ props.line > 0 ? <p className="line-value"> <i className="fas fa-users"></i> { props.line } <span className="brake-line">|</span></p>  : <span></span> }
			<p>{props.label}</p>
		</button>
	)
}

export default BigButton