import React from 'react'

// STYLE
import './CopyButton.scss'

const CopyButton = (props) => {

	function goToLink(url) {
		// window.location(props.url)
	}

	return (
		<button className="copy-button" onClick={goToLink()}>
			<i className="far fa-copy"></i>
		</button>
	)
}

export default CopyButton