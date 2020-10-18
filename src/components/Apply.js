import React from 'react';
import LearnableHeader from './Learnable-Header';
import SubscribeDiv from './SubscribeDiv';
import applyPic from '../images/apply/applyPic.png';
import centerPic from '../images/shared/journalApplyPic.png';
import {NavLink} from 'react-router-dom';

function Apply() {
	return (
		<main>
			<LearnableHeader/>

			<section className='flexBox3' id='ApplyDiv'>

				<div>
					<h1 className='text96'>Apply Your Knowledge</h1>
					<p>Before you’re done with Learnable, you will apply everything you’ve learned. 
					You’ll be part of a team made up of 2 designers and 4 developers. 
					You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. 
					By combining technology, design, and great ideas, 
					your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, 
					from the first pen sketches to the final functioning product. 
					You’ll then get to show off your special project to everyone.</p>
				</div>

				<img src={applyPic} className='floatRight' />
			</section>

			<img src={centerPic} id='centeredPic'/>

			<section id='cardWrap'>
				<div id='card'>
					<div>
						<h1>How To Get In</h1>
						<p>We are very deliberate with our selection process. 
						We are on a quest to find amazing people who are 
						passionate about learning and growing their careers in the software industry. 
						To this end, we have designed our selection process to help us get such people.</p> 
					</div>

					<div>
						<h1>Online Application</h1>
						<p>Introduce yourself to us by filling out our application form. 
						When you’re done filling out the form, 
						proceed to download our prep curriculum that contains everything you need to prepare for the 
						physical and technical assessment.</p>
						<NavLink to='#' className='greenFont underline'>APPLY HERE</NavLink>
					</div>

					<div>
						<h1>Phone Call Interviews</h1>
						<p>We will reach out to you to discuss possible opportunities, 
						ascertain where you fit in with us, and answer any questions you might have about the program. 
						It’s supposed to be a chat, getting nervous defeats the aim.</p>
					</div>

					<div>
						<h1>Final Assessment</h1>
						<p>At this stage, we’ll get to meet you in person for the first time. 
						You’ll be invited to the hub for a physical assessment that includes a technical assessment, 
						a psychometric test and a face-to-face chat with our team.</p>
					</div>

					<div>
						<h1>Get In</h1>
						<p>If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. 
						We will join you on your journey to build that career of your dreams and provide all the help, 
						support and love that we can muster along the way!</p>
					</div>
				</div>
			</section>
			<SubscribeDiv/>
		</main>
	)
}

export default Apply;