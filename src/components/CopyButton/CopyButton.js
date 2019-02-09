import React from 'react'

// STYLE
import './CopyButton.scss'

const CopyButton = (props) => {

	// FUNCTION TO OPEN AN URL ON ANOTHER TAB
	let setURL = (url) => {
		window.open(url, '_blank');
	}

	return (
		<button className="copy-button" onClick={() => setURL(props.url)}>
			<i className="far fa-copy"></i>
		</button>
	)
}

export default CopyButton