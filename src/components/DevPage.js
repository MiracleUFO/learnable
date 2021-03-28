import React from 'react';
import LazyLoad from 'react-lazyload';
import Header from './Header';
import LearnableHeader from './Learnable-Header';
import SubscribeDiv from './SubscribeDiv';
import avatar from '../images/shared/avatar.png';
import devPic from '../images/devPage/developerPic.png';

function DevPage() {
	return (
		<main id='Developer'>
			<Header/>
			<LearnableHeader/>

			<section className='flexBox avatarSect avatarSectDevDes'>
				<div>
					<h1 className='text96'>The Learnable Software Developer</h1>
					<p>
						Creativity means a lot to us. 
						So we look for people who can think both logistically and artistically, 
						and who know that limits are made to be pushed. We value skill and aptitude, 
						but we honor those who care about working with their team to add the Genesys flavour to every project.
						</p><br/>
					<p>
						As a developer, being part of the team exposes you to a range of diverse, 
						like-minded talented people who are sure to make the experience fun for you. 
						You’ll get a shot at building amazing things, developing yourself, learning on the job, 
						while exchanging healthy jokes and having random hangouts once in a while.
					</p><br/>
				</div>

				<div className='greenDiv avatarDevDes floatRight'><img src={avatar} className='avatar' alt=''/></div>
			</section>

			<blockquote className='greenFont text60 floatLeft paddingHeader'>
						“You are someone people can count on. Every day, you come in ready to make great things happen.”
			</blockquote>


			<LazyLoad once><img src={devPic} className='centeredPic' alt=''/></LazyLoad>

			<section className='cardWrap' id='cardWrap'>
				<div className='card'>
					<div>
						<h1>We expect you to…</h1>

						<p>Play nice with other people.</p><br/>

						<p>Be an actively engaging person. 
						That means you are present, motivated, and social. 
						You know how to communicate effectively with your teammates.</p><br/>

						<p>Love to code. You understand the basics of programming and 
						object-oriented design and development.</p><br/>

						<p>Have an eye for detail. 
						Your keen observation helps you catch discrepancies and fix them quickly.</p><br/>

						<p>Be innately curious. Your love for technology is insatiable, 
						so you’re always researching and experimenting. 
						Learning new technical skills while on the job is something you look forward to.</p><br/>

						<p>Appreciate good design. You want to make something that 
						doesn't just work flawlessly but looks amazing.</p>
					</div>
				</div>
			</section>
			<SubscribeDiv/>
		</main>
	)
}

export default DevPage;