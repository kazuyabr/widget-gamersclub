import React from 'react'

// STYLE
import './BottomBar.scss'
import BottomData from '../BottomData/BottomData';

const Bottombar = (props) => {

	return (
		<div className="bottombar">
			<button className="bottom-btn"><i class="fas fa-download"></i> <span>Download Gamers Club Anti-Cheat</span></button>
			<section className="bottom-info">
				<BottomData
					textTop="Jogadores"
					textBottom="Online"
					mainColor="#2c97de"
					number="9352"></BottomData>
				<BottomData
					textTop="Cheaters Banidos"
					textBottom="Nos Últimos 7 Dias"
					mainColor="#eb2f2f"
					number="174"></BottomData>
			</section>
		</div>
	)
}

export default Bottombar