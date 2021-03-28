import React from 'react';
import LazyLoad from 'react-lazyload';
import {NavLink} from 'react-router-dom';
import Header from './Header';
import SubscribeDiv from './SubscribeDiv';
import introVid from '../images/landing/introVid.png';
import play from '../images/shared/play.png';
import arrDown from '../images/shared/arr-down.png';
import learnableMan from '../images/landing/pic2-man.png';
import agora from '../images/landing/agora.png';
import startZone from '../images/landing/startZone.png';
import otherThings1 from '../images/landing/otherThings1.png';
import otherThings2 from '../images/landing/otherThings2.png';
import otherThings3 from '../images/landing/otherThings3.png';
import bestT from '../images/landing/bestT.png';

function Landing() {
	return (
		<main id='landing'>
			<Header/>
			<section id='landingIntro' className='padding'>
				<h1 className='h1Intro capitalize'>Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate.</h1>
				<p>We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</p>		
			</section>

			<section>
				<LazyLoad once><img src={arrDown} className='arr' id='arr1' alt='Arrow down'/></LazyLoad>

			<LazyLoad once>
				<div className='relativeContainer'>
					
						<div className='centeredIcon'>
							<img src={play} alt='Play button'/>
							<p className='whiteFont'>#weAreGenesys</p>
						</div>
					
						<img src={introVid} className='picRight floatRight' alt=''/>
				</div>
			</LazyLoad>
			</section>

			<LazyLoad once>
			<section className='flexBox3 flexBox2 genesysSects' id='firstSectImg'>
				<img src={learnableMan} className='floatLeft' alt=''/>

				<div className='flexColumn sectionTag'>
					<h1>Learnable</h1>
					<p>
						Every year, young Nigerians are launching new careers in the technology industry. 
						Find out how Genesys is helping them do it.
					</p>
					<NavLink to='/Learnable'>LEARN MORE</NavLink>

				</div>
			</section>
			</LazyLoad>

			<LazyLoad once>
			<section className='flexBox3 flexBox2 greyDiv genesysSects'>
				<div className='flexColumn sectionTag'>
					<h1>Agora</h1>
					<p>
						We are reimagining the workplace and how people work. 
						Find out how our co-working spaces can help you enjoy the work that you do.
					</p>
					<NavLink to='#'>LEARN MORE</NavLink>

				</div>

				<img src={agora} className='floatRight' alt=''/>
			</section>
			</LazyLoad>

			<LazyLoad once>
			<section className='flexBox3 flexBox2 genesysSects' id='thirdSectImg'>
				<img src={startZone} className='floatLeft' alt=''/>

				<div className='flexColumn sectionTag'>
					<h1>StartZone</h1>
					<p>
						The business environment is harsh for early-stage businesses. 
						We can help you rise above it all.
					</p>
					<NavLink to='#'>HERE’S HOW</NavLink>
				</div>
			</section>
			</LazyLoad>

			<LazyLoad once>
			<section className='flexBox3 flexBox2 greyDiv genesysSects' id='otherThingsContainer'>
				<div id='otherThingsGrid' className='floatRight otherThings'>
					<img src={otherThings1}  alt=''/>
					<NavLink to='#'><h2 className='underline'>GenesysIgnite</h2></NavLink>

					<div>
						<img src={otherThings2} alt=''/>
						<h2 className='text24 underline'>CodeVille</h2>
					</div>

					<div>
						<img src={otherThings3} alt=''/>
						<h2 className='text24 underline'>Pink Summer of Code</h2>
					</div>
				</div>

				<div className='flexColumn sectionTag'>
					<h1 className='text60'>Other things we <br/> do</h1>
				</div>
			</section>
			</LazyLoad>

			<LazyLoad once>
			<section className='flexBox3 flexBox2 cadetBlue genesysSects'>
			<img src={bestT} className='floatRight otherThings' alt=''/>
				<div className='flexColumn sectionTag'>
					<h1 className='cadetBlue capitalize'>The best team in the world</h1>
					<p className='cadetBlue'>
					We work with the most amazing people our industry has to offer. 
					They are really passionate about making a difference
					</p>
					<NavLink to='#'>SEE TEAM</NavLink>
				</div>
			</section>
			</LazyLoad>

			<SubscribeDiv/>

		</main>
	)
}

export default Landing;