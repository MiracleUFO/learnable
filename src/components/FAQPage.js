import React from 'react';
import LearnableHeader from './Learnable-Header';
import SubscribeDiv from './SubscribeDiv';
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

		<SubscribeDiv/>

		</main>
	)
}

export default FAQPage;