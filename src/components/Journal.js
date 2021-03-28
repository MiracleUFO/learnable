import React from 'react';
import LazyLoad from 'react-lazyload';
import {NavLink} from 'react-router-dom';
import Header from './Header';
import LearnableHeader from './Learnable-Header';
import JournalGrid from './JournalGrid';
import SubscribeDiv from './SubscribeDiv';
import journalPic from '../images/shared/journalApplyPic.png';
import journalAvatar from '../images/journal/journalAvatar.png';

function Journal() {
	return (
		<main>
			<Header/>
			<LearnableHeader/>

			<section className='greyDiv flexBox flexBox2 padding' id='journalHero'>
				<h1 className='text96'>Journal</h1>
				<button>CATEGORIES</button>
			</section>

			<section className='flexBox' id='journalPicDiv'>			
				<img src={journalPic}  alt=''/>

				<div id='picDivTag'>
					<NavLink to='#' className='greenFont underline'>Inspiration</NavLink>
					<h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Sit sapien arcu vitae orci at molestie. 
					Pharetra quisque donec accumsan rhoncus risus. 
					Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. 
					Vulputate euismod commodo donec tincidunt et, aliquam. 
					Eget scelerisque netus habitant dui porttitor cursus. 
					Ipsum sem ut tortor ac ullamcorper. Lacus.</p>
					<div className='flexBox3' id='journalAvatarDiv'>
						<img src={journalAvatar} alt=''/> <p>David Mong, Apr 9, 2020</p>
					</div>
				</div>
				
			</section>

			<LazyLoad once>
				<JournalGrid/>
				<JournalGrid/>
				<SubscribeDiv/>
			</LazyLoad>

			
		</main>
	)
}

export default Journal;