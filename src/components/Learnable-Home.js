import React from 'react';
import LearnableHeader from './Learnable-Header';
import FAQs from './FAQs';
import JournalGrid from './JournalGrid';
import SubscribeDiv from './SubscribeDiv';
import {NavLink} from 'react-router-dom';
import line from '../images/learnable-home/linebold.png';
import introVid from '../images/learnable-home/learnableIntroVid.png';
import play from '../images/shared/play.png';
import arrDown from '../images/shared/arr-down.png';
import avatar from '../images/shared/avatar.png';
import learnExp from '../images/learnable-home/learnExp.png';
import eligible from '../images/learnable-home/eligible.png';
import culture from '../images/learnable-home/culture.png';
import mentioned1 from '../images/learnable-home/mentioned.png';
import mentioned2 from '../images/learnable-home/mentioned2.png';
import mentioned3 from '../images/learnable-home/mentioned3.png';
import mentioned4 from '../images/learnable-home/mentioned4.png';
import mentioned5 from '../images/learnable-home/mentioned5.png';
import fun1 from '../images/learnable-home/fun1.png';
import fun2 from '../images/learnable-home/fun2.png';
import fun3 from '../images/learnable-home/fun3.png';
import fun4 from '../images/learnable-home/fun4.png';
import fun5 from '../images/learnable-home/fun5.png';
import fun6 from '../images/learnable-home/fun6.png';
import fun7 from '../images/learnable-home/fun7.png';
import fun8 from '../images/learnable-home/fun8.png';
import fun9 from '../images/learnable-home/fun9.png';
import fun10 from '../images/learnable-home/fun10.png';
import fun11 from '../images/learnable-home/fun11.png';
import fun12 from '../images/learnable-home/fun12.png';
import fun13 from '../images/learnable-home/fun13.png';
import fun14 from '../images/learnable-home/fun14.png';
import fun15 from '../images/learnable-home/fun15.png';
import fun16 from '../images/learnable-home/fun16.png';
import expert1 from '../images/learnable-home/expert1.png';
import expert2 from '../images/learnable-home/expert2.png';
import expert3 from '../images/learnable-home/expert3.png';
import expert4 from '../images/learnable-home/expert4.png';
import expert5 from '../images/learnable-home/expert5.png';
import expert6 from '../images/learnable-home/expert6.png';

function Learnable() {
	return (
		<main>

			<LearnableHeader/>

			<section className='yellowDiv flexBox2 padding' id='announcment'>
				<div>
					<h2>Coming Soon: Learnable '20 </h2>
					<p>
						We've started taking in applications for the next batch of learnable interns. 
						Applications are on till the 21st of Febuary
					</p>
				</div>
				<div className='flexColumn flexBox4'>
					<p>Click link to download...</p>
					<NavLink to='#'>
						<h2>Learnable ‘20 Brochure</h2>
						<img src={line} />
					</NavLink>
				</div>
			</section>

			<section>
				<div className='padding h1Intro'>
					<h1 className='text96'>Everything <br/> is Learnable</h1>
					<p className='picRight'>
					Learnable is the perfect product development internship program brought to you by Genesys.
					</p>
				</div>
			</section>

			<section id='learnableIntroVid' className='relativeContainer'>
				<img src={arrDown} className='arr' id='arr3'/>

				<div>
					<div id='circlesDiv' className='flexBox3 floatRight'>
					<div className='circle greenDiv flexColumn flexBox4'>
						<NavLink to='#' className='flexBox4'><h2>Development</h2><span> ></span></NavLink>
						<p>What to expect</p>
					</div>

					<div className='circle cadetBlue flexColumn flexBox4'>
						<NavLink to='#' className='flexBox4'><h2 className='whiteFont'>Product Design</h2><span className='whiteFont'> ></span></NavLink>
						<p className='whiteFont'>What to expect</p>
					</div>
				</div>
					<img src={introVid} className='picRight floatRight' id='movedVid'/>
				</div>
			</section>

			<section className='flexBox3 flexBox2 greyDiv' id='greyBackground'>
					<div>
						<h1>305</h1>
						<p>Young Software <br/>Developers Trained</p>
					</div>

					<div>
						<h1>2100</h1>
						<p>Tech Enthusiasts</p>
					</div>

					<div>
						<h1>8</h1>
						<p>StartUps Incubated</p>
					</div>

					<div>
						<h1>250</h1>
						<p>Small Businesses <br/>supported</p>
					</div>
			</section>

			<section className='flexBox3' id='avatarSect'>
				<div>
					<h1>We Make People Great</h1>
					<p>
						As part of our calculated efforts to contribute to the emerging knowledge and skills driven 
						economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry. 
					</p> <br/>
					<p>We primarily educate and groom software developers and designers, preparing them for the industry.</p>
				</div>
				<div className='greenDiv avatar avatarContainer floatRight'><img src={avatar} className='avatar'/></div>
			</section>

			<section className='flexBox3 flexBox2 greyDiv genesysLearnableSects padding'>
				<img src={learnExp} className='floatLeft'/>

				<div className='flexColumn'>
					<h1>An Unusual Learning Experience</h1>
					<p>
						At Genesys, we believe in the learning processes as much as we believe in the results. 
						By applying a combination of active and social learning methodologies, 
						we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.
						</p> <br/>						
					<p>
						Our methods over the years have helped us discover ways to take education out of the classroom. 
						We introduce our interns to learning by experimentation and problem-solving. 
						To us, every task is an opportunity to learn.
					</p>
				</div>
			</section>

			<section className='flexBox flexBox2  genesysLearnableSects  curriculumGridCont'>
			
				<div className='flexColumn'>
					<p>FOR DEVELOPERS</p>
					<h1 className='capitalize'>Learn to build software the right way</h1>
					<p>
						We love to build stuff. 
						Really awesome stuff. 
						That’s why we have developed a learning program that will empower you to create amazing software the right way.
					</p> <br/>
					<p>	
						We believe in learning through experimentation. 
						Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.
					</p>
					<NavLink to='#' className='greenFont'>LEARN MORE</NavLink>
				</div>

				<div className='floatRight curriculumGrid' alt='Developer curriculum'>
					<div className='cadetBlue'><h1 className='whiteFont'>Program with JavaScript</h1></div>
					<div className='greenDiv'><h1 className='whiteFont'>Version Control with Git</h1></div>
					<div className='yellowDiv'><h1>Web Development with React</h1></div>
					<div className='darkPurpleDiv'><h1 className='whiteFont'>Building APIs with NodeJS</h1></div>
					<div className='gunMetalDiv'><h1 className='whiteFont'>Managing Data with MongoDB</h1></div>
					<div className='orangeDiv'><h1 className='whiteFont'>Deploying with Heroku</h1></div>
				</div>

			</section>

			<section className='flexBox flexBox2 greyDiv genesysLearnableSects curriculumGridCont'>

				<div className='floatRight curriculumGrid' alt='Designer curriculum'>
					<div className='cadetBlue'><h1 className='whiteFont'>Design User Interfaces</h1></div>
					<div className='orangeDiv'><h1 className='whiteFont'>Craft User Experiences</h1></div>
					<div className='yellowDiv'><h1>Apply Design Thinking</h1></div>
					<div className='gunMetalDiv'><h1 className='whiteFont'>Build Information Architecture</h1></div>
					<div className='redDiv'><h1 className='whiteFont'>Copy write for Projects</h1></div>
					<div className='greenDiv'><h1 className='whiteFont'>Brand Products</h1></div>
				</div>

				<div className='flexColumn'>
					<p>FOR DESIGNERS</p>
					<h1>Design Different</h1>
					<p>
						We love to make things work perfectly. 
						That’s why our design learning path exposes you to the science of user-oriented design.
					</p> <br/>
					<p>
						Design is at the heart of everything we do at Genesys. 
						Right from the start of the program, you’ll get your hands dirty as you get practically involved in the world’s most modern design concepts. 
						At Genesys, we’re building designers who put the users first.
					</p>
					<NavLink to='#' className='greenFont'>LEARN MORE</NavLink>
				</div>
			</section>

			<section className='flexBox3 flexBox2 genesysLearnableSects padding' alt='Eligiblity Section'>
			
				<div className='flexColumn'>
					<h1>Who is Eligible?</h1>
					<p>	
						To be a participant of lernable, you need to be a young and passionate person interested in launching a super tech career. 
						You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program.
					</p><br/>
					<p>
						To become a part of the Genesys family, you must express some of the qualities we consider important. 
						You are someone that takes responsibilities and initiatives. 
						You will also express the ability to produce quality stuff in good time with high consistency. 
					</p>
				</div>

				<img src={eligible} className='floatRight'/>
			</section>

			<section className='flexBox3 flexBox2 genesysLearnableSects padding orangeDiv relativeContainer' alt='About Culture Section'>
					<img src={play} className='play' id='play3'/>
					<img src={culture} className='floatLeft'/>

				<div className='flexColumn'>
					<h1 className='whiteFont'>Our Culture</h1>
					<p className='whiteFont'>	
						Our culture are the unspoken things that make us who we are at Genesys. 
						To become one of us, you need to be like the rest of us. 
						We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. 
						We are passionate, candid and we trust in the power of collaboration.
					</p>
				</div>
			</section>

			<section className='flexBox flexBox2 genesysLearnableSects curriculumGridCont'>
			
				<div className='flexColumn'>
					<h1 className='capitalize'>Learning can be fun…</h1>
					<p>
						We believe learning should be a fun experience. 
						For this reason, we don’t do all the learning in the classroom.
					</p><br/>

					<p>
						The Learnable experience can not be complete without the bag of fun times which you’ll have. 
						To us, every task is an opportunity to have some fun. 
						But we do well to throw in a good number of activities to add to this. 
						You will find yourself partaking in a lot of healthy activities such as cooking, sports, music, hangouts, and even random dates.
					</p><br/>

					<p>
						Trust us when we say we know how to have fun.
						Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive.
					</p>
				</div>

				<div className='floatRight picGrid'>
					<img src={fun1}/>
					<img src={fun2}/>
					<img src={fun3}/>
					<img src={fun4}/>
					<img src={fun5}/>
					<img src={fun6}/>
					<img src={fun7}/>
					<img src={fun8}/>
					<img src={fun9}/>
					<img src={fun10}/>
					<img src={fun11}/>
					<img src={fun12}/>
					<img src={fun13}/>
					<img src={fun14}/>
					<img src={fun15}/>
					<img src={fun16}/>
				</div>
			</section>

			<section className='flexBox flexBox2 greyDiv genesysLearnableSects curriculumGridCont'>
				<div className='floatLeft expertsGrid'>
					<div>
						<img src={expert1}/><h2>Nnamdi</h2><p>Managing Director</p>
					</div>

					<div>
						<img src={expert2}/><h2>Ositadinma</h2><p>Learnable Coordinator</p>
					</div>

					<div>
						<img src={expert3}/><h2>Idowu</h2><p>Scrum Proffessional</p>
					</div>

					<div>
						<img src={expert4}/><h2>Ezra</h2><p>Ass. Learnable Coordinator</p>
					</div>

					<div>
						<img src={expert5}/><h2>David</h2><p>Design Lead</p>
					</div>

					<div>
						<img src={expert6}/><h2>Emmanuel</h2><p>Software Lead</p>
					</div>
				</div>

				<div className='flexColumn'>
					<h1>Learn from the Experts</h1>
					<p>
						As a learnable intern, you will be learning from the best software developers and product designers our industry has to offer. 
						You will spend the first 3 months in the classroom with industry experts who have a wealth of experience 
						from developing amazing products for various customers in our industry.
					</p>
				</div>
			</section>

			<section className='flexBox3 flexBox2 genesysLearnableSects padding'>
				<div className='flexColumn'>
					<h1 className='capitalize'>Learning doesn’t always have to be in the classroom</h1>
					<p>
						We have designed other learning activities that aren’t classroom-based. 
						You will learn how to be a better person, how to have good conversations, 
						how to work better with people and most importantly, how to lead other people. 
						Hey! We’ll even teach you how to run a business during the Learnable Business Sessions.
					</p>
				</div>
				<div className='floatRight picGrid'>
					<img src={fun1}/>
					<img src={fun2}/>
					<img src={fun3}/>
					<img src={fun4}/>
					<img src={fun5}/>
					<img src={fun6}/>
					<img src={fun7}/>
					<img src={fun8}/>
					<img src={fun9}/>
					<img src={fun10}/>
					<img src={fun11}/>
					<img src={fun12}/>
					<img src={fun13}/>
					<img src={fun14}/>
					<img src={fun15}/>
					<img src={fun16}/>
				</div>

			</section>

			<section className='flexBox3 flexBox2 cadetBlue genesysLearnableSects padding'>
				<div className='floatLeft'></div>

				<div className='flexColumn'>
					<h1 className='whiteFont'>Apply Your Knowledge</h1>
					<p className='whiteFont'>
						Before you’re done with Learnable, you will apply everything you’ve learned. 
						You’ll be part of a team made up of 2 designers and 4 developers. 
						You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. 
						By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the 
						Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. 
						You’ll then get to show off your special project to everyone.
					</p>
					<NavLink to='#' className='greenFont'>GET STARTED</NavLink>
				</div>
			</section>

			<section className='padding learnableOtherSects'>
				<h1 className='text60'>FAQs</h1>
				<FAQs/>
				<NavLink to='#' className='greenFont underline flexColumn flexBox2'>SEE ALL</NavLink>
			</section>

			<section className='greyDiv learnableOtherSects'>
				<h1 className='text60' id='learnableJournalHeader'>Journal</h1>
				<NavLink to='#' className='greenFont underline paddingHeader'>VIEW ALL</NavLink>
				<JournalGrid/>
			</section>
			
			<section className='flexBox3 flexBox2' id='mentions'>
				<NavLink to='#' className='underline'>Mentioned in</NavLink>
				<img src={mentioned1}/>
				<img src={mentioned2}/>
				<img src={mentioned3}/>
				<img src={mentioned4}/>
				<img src={mentioned5}/>
			</section>

			<SubscribeDiv/>
		</main>

	)
}

export default Learnable;