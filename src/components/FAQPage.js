import React from 'react';
import LearnableHeader from './Learnable-Header';
import SubscribeDiv from './SubscribeDiv';
import FAQs from './FAQs';
import faq from '../images/faq/FAQ.png';

function FAQPage() {
	return (
		<main>
		<LearnableHeader/>

		<section className='flexBox padding' id='faqHeader'><h1 className='text96'>FAQs</h1> <img src={faq} alt=''/></section>

		<section><FAQs/></section>

		<SubscribeDiv/>

		</main>
	)
}

export default FAQPage;