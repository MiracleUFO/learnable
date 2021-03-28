import React from 'react';
import Header from './Header';
import LazyLoad from 'react-lazyload';
import LearnableHeader from './Learnable-Header';
import SubscribeDiv from './SubscribeDiv';
import avatar from '../images/shared/avatar.png';
import designPic from '../images/designerPage/designPic.png';

function DesignerPage() {
	return (

		<main id='Designer'>
			<Header />
			<LearnableHeader />

			<section className='flexBox avatarSect avatarSectDevDes'>
				<div>
					<h1 className='text96'>The Learnable Product Designer</h1>

					<p>
						At Genesys, you'll be exposed to every discipline in our creative process – 
						UX, UI, interaction design, and copywriting. 
						You’ll be part of a dynamic team that's made up of like-minded, talented people. 
						You'll work hard with them to create things that will amaze everyone everywhere.
					</p><br/>

					<p>
					In addition to your team projects, you’ll be lending a hand to the creative team. 
					Participating in brainstorm sessions, building winning pitches, 
					preparing assets, and design scriptures for productions, you'll be in the thick of it all.
					</p><br/>

					<p>
					Oh, and you’ll make amazing friends while you're at it!
					</p>
				</div>

				<div className='orangeDiv avatarDevDes floatRight'>
					<img src={avatar} className='avatar' alt=''/>
				</div>
				
			</section>

			<blockquote className='orangeFont text60 floatLeft paddingHeader'>
						“The greats weren’t great because at birth they could paint. 
						The greats were great because they painted a lot.” - Macklemore
			</blockquote>


			<LazyLoad once><img src={designPic} className='centeredPic' alt=''/></LazyLoad>

			<section className='cardWrap' id='cardWrap'>
				<div className='card'>
					<div>
						<h1>We expect you to…</h1>

						<p>Play nice with other people.</p><br/>

						<p>Be an actively engaging person. 
						That means you are present, motivated, and social.</p><br/>

						<p>Understand how to use the Figma design software</p><br/>

						<p>Be able to create initial design layouts with confidence and 
						know-how to effectively communicate concepts to everyone on your team.</p><br/>

						<p>Have a basic understanding of design principles and theories
						To have creative courage. This is a tough industry, 
						only the brave and sturdy remain.</p><br/>

						<p>Be prepared to defend your decisions and take constructive criticism.</p>
					</div>
				</div>
			</section>
			<SubscribeDiv/>
		</main>
	)
}

export default DesignerPage;

 
