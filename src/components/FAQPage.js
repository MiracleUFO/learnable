import React from 'react';
import LearnableHeader from './Learnable-Header';
import FAQs from './FAQs';
import faq from '../images/faq/FAQ.png';
import arrUp from '../images/shared/arr-up.png';
import line from '../images/landing/line.png';

function FAQPage() {
	return (
		<main>
		<LearnableHeader/>

		<section className='flexBox padding' id='faqHeader'><h1 className='text96'>FAQs</h1> <img src={faq}/></section>

		<section><FAQs/></section>
		<section>
				<img src={arrUp} className='arr' id='arr4'/>
				<div className='floatRight subscribe flexBox2 flexBox3 yellowDiv'> 
					<h2 className='h1Intro'>Stay up to date on what we are doing and new learning opportunities</h2>
					<div><p>Your email</p> <img src={line} /> <p>View privacy policy</p></div>
					<button>Subscribe</button>
				</div>
			</section>

		</main>
	)
}

export default FAQPage;