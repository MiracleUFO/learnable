import React from 'react';
import {NavLink} from 'react-router-dom';
import introVid from '../images/landing/introVid.png';
import play from '../images/landing/play.png';
import arrDown from '../images/landing/arr-down.png';
import arrUp from '../images/landing/arr-up.png';
import learnableMan from '../images/landing/pic2-man.png';
import agora from '../images/landing/agora.png';
import startZone from '../images/landing/startZone.png';
import otherThings from '../images/landing/group.png';
import bestT from '../images/landing/bestT.png';
import line from '../images/landing/line.png';

function Landing() {
	return (
		<main id='landing'>
			<section id='landingIntro' className='padding'>
				<h1 className='h1Intro'>Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate.</h1>
				<p>We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</p>		
			</section>

			<section>
				<img src={arrDown} className='arr' id='arr1'/>
				<div className='centeredIcon'><img src={play} /> <p id='whiteFont'>#weAreGenesys</p></div>
				<img src={introVid} className='picRight floatRight'/>
			</section>

			<section className=' flexBox3 flexBox2 padding2'>
				<img src={learnableMan} className='floatLeft'/>

				<div className='flexColumn sectionTag'>
					<h1>Learnable</h1>
					<p>
						Every year, young Nigerians are launching new careers in the technology industry. 
						Find out how Genesys is helping them do it.
					</p>
					<NavLink to='/Learnable'>LEARN MORE</NavLink>

				</div>
			</section>

			<section className='flexBox3 flexBox2 grey padding2'>
				<div className='flexColumn sectionTag'>
					<h1>Agora</h1>
					<p>
						We are reimagining the workplace and how people work. 
						Find out how our co-working spaces can help you enjoy the work that you do.
					</p>
					<NavLink to='#'>LEARN MORE</NavLink>

				</div>

				<img src={agora} className='floatRight'/>
			</section>

			<section className='flexBox3 flexBox2 padding2'>
				<img src={startZone} className='floatLeft'/>

				<div className='flexColumn sectionTag'>
					<h1>StartZone</h1>
					<p>
						The business environment is harsh for early-stage businesses. 
						We can help you rise above it all.
					</p>
					<NavLink to='#'>HERE’S HOW</NavLink>

				</div>
			</section>

			<section className='flexBox3 flexBox2 grey padding2'>
			<img src={otherThings} className='floatRight otherThings'/>

				<div className='flexColumn sectionTag'>
					<h1>Other things we <br/> do</h1>

				</div>
			</section>

			<section className='flexBox3 flexBox2 cadetBlue padding2'>
			<img src={bestT} className='floatRight otherThings'/>
				<div className='flexColumn sectionTag'>
					<h1 className='cadetBlue'>The best team in the world</h1>
					<p className='cadetBlue'>
					We work with the most amazing people our industry has to offer. 
					They are really passionate about making a difference
					</p>
					<NavLink to='#'>SEE TEAM</NavLink>
				</div>
			</section>

			<section>
				<img src={arrUp} className='arr' id='arr2'/>
				<div className='floatRight subscribe flexBox2 flexBox3' id='cyanSubscribe'> 
					<h1 className='h1Intro'>Stay up to date on what we are doing and new learning opportunities</h1>
					<div><p>Your email</p> <img src={line} /> <p>View privacy policy</p></div>
					<button>Subscribe</button>
				</div>
			</section>
		</main>
	)
}

export default Landing;