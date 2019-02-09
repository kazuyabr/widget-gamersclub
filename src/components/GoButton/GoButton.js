import React from 'react'

// STYLE
import './GoButton.scss'

const GoButton = (props) => {

	function goToLink(url) {
		// window.location(props.url)
	}

	return (
		<button className="go-button" onClick={goToLink()}>
			<i className="fas fa-sign-out-alt"></i>
		</button>
	)
}

export default GoButton