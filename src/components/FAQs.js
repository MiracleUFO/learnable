import React from 'react';
import line from '../images/faq/lineFAQ.png';
import tick from '../images/faq/tickFAQ.png';

function FAQs () {
	return (
		<div className={document.URL.includes('FAQs')? ' faqsContainer':'learnableFAQ faqsContainer'}>
			<ul className='flexColumn underline' id='faqs'>
				<li><div className='flexBox'><h2>How many people can attend a course?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>What’s the learning experience like?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Who are the coaches?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>How far in advance should we book?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
				<li><div className='flexBox'><h2>Can you customize your courses?</h2><img src={tick} alt=''/></div><img src={line} alt=''/></li>
		</ul>
		</div>
	)
}

export default FAQs;