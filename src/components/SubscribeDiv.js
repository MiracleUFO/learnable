import React from 'react';
import line from '../images/landing/line.png';
import arrUp from '../images/shared/arr-up.png';

function SubscribeDiv() {
	let classes = 'floatRight subscribe flexBox2 flexBox3';
	let url = document.URL;
	return (
		<section>
				<img src={arrUp}  className='arr' id='arr4'/>
				<div className={url.includes('Learnable') || url.includes('Dev') || url.includes('Designer') || url.includes('Apply') || url.includes('Journal') || url.includes('FAQs')? classes + ' yellowDiv' : classes + ' cyanSubscribe'}> 
					<h2 className='h1Intro'>Stay up to date on what we are doing and new learning opportunities</h2>
					<div><p>Your email</p> <img src={line} /> <p>View privacy policy</p></div>
					<button>Subscribe</button>
				</div>
			</section>
	)
}

export default SubscribeDiv;