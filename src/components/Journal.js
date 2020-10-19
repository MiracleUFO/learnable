import React from 'react';
import {NavLink} from 'react-router-dom';
import LearnableHeader from './Learnable-Header';
import JournalGrid from './JournalGrid';
import SubscribeDiv from './SubscribeDiv';
import journalPic from '../images/shared/journalApplyPic.png';
import journalAvatar from '../images/journal/journalAvatar.png';

function Journal() {
	return (
		<main>

			<LearnableHeader/>

			<section className='greyDiv flexBox flexBox2 padding' id='journalHero'>
				<h1 className='text96'>Journal</h1>
				<button>CATEGORIES</button>
			</section>

			<section className='flexBox' id='journalPicDiv'>
				<img src={journalPic} className='floatLeft' alt=''/>
				<div>
					<NavLink to='#' className='greenFont underline'>Inspiration</NavLink>
					<h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Sit sapien arcu vitae orci at molestie. 
					Pharetra quisque donec accumsan rhoncus risus. 
					Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. 
					Vulputate euismod commodo donec tincidunt et, aliquam. 
					Eget scelerisque netus habitant dui porttitor cursus. 
					Ipsum sem ut tortor ac ullamcorper. Lacus.</p>
					<div className='flexBox3' id='journalAvatarDiv'><img src={journalAvatar} alt=''/> <p>David Mong, Apr 9, 2020</p></div>
				</div>
				
			</section>

			<JournalGrid/>
			<JournalGrid/>

			<SubscribeDiv/>
		</main>
	)
}

export default Journal;