import React from 'react';
import line from '../images/landing/line.png';
import arrUp from '../images/shared/arr-up.png';

function SubscribeDiv() {
	return (
		<section className='relativeContainer'>
				<img src={arrUp}  className='arr' id='arr4'/>
				<div className='floatRight subscribe flexBox2 flexBox3 yellowDiv'> 
					<h2 className='h1Intro'>Stay up to date on what we are doing and new learning opportunities</h2>
					<div><p>Your email</p> <img src={line} /> <p>View privacy policy</p></div>
					<button>Subscribe</button>
				</div>
			</section>
	)
}

export default SubscribeDiv;