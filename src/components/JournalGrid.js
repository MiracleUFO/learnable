import React from 'react';
import {NavLink} from 'react-router-dom';
import journal1 from '../images/journal/journal1.png';
import journal2 from '../images/journal/journal2.png';
import journal3 from '../images/journal/journal3.png';
import journal4 from '../images/journal/journal4.png';

function JournalGrid() {
	return (
		<div id='journalGrid'>
			<img src={journal1} />
			<img src={journal2} />
			<img src={journal3} />
			<img src={journal4} />

			<div>
				<NavLink to='#' className='flexColumn flexBox greenFont underline paddingHeader'>Inspiration</NavLink>
				<h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
				<p>David Mong, Apr 9, 2020</p>
			</div>

			<div>
				<NavLink to='#' className='flexColumn flexBox greenFont'>Inspiration</NavLink>
				<h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
				<p>David Mong, Apr 9, 2020</p>
			</div>

			<div>
				<NavLink to='#' className='flexColumn flexBox greenFont'>Inspiration</NavLink>
				<h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
				<p>David Mong, Apr 9, 2020</p>
			</div>

			<div>
				<NavLink to='#' className='flexColumn flexBox greenFont'>Inspiration</NavLink>
				<h1>Learn Design Thinking like a Pro and Build Projects that People will care about</h1>
				<p>David Mong, Apr 9, 2020</p>
			</div>
		</div>
	)
}

export default JournalGrid;