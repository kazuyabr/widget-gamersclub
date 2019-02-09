import React from 'react'

// STYLE
import './GoButton.scss'

const GoButton = (props) => {

	// FUNCTION TO OPEN AN URL ON ANOTHER TAB
	let setURL = (url) => {
		window.open(url, '_blank');
	}

	return (
		<button className="go-button" onClick={() => setURL(props.url)}>
			<i className="fas fa-sign-out-alt"></i>
		</button>
	)
}

export default GoButton