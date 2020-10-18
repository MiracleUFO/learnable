import React from 'react';
import {NavLink} from 'react-router-dom'

function LearnableHeader() {
	return (
		<header id='learnableHeader' className='cadetBlue'>
			<nav id='learnableNav'>
				<NavLink to='/Learnable'>HOME</NavLink>
				<NavLink to='/DevPage'>SOFTWARE DEVELOPERS</NavLink>
				<NavLink to='/DesignerPage'>PRODUCT DESIGNERS</NavLink>
				<NavLink to='/Apply'>APPLY</NavLink>
				<NavLink to='/Journal'>JOURNAL</NavLink>
				<NavLink to='/FAQs'>FAQs</NavLink>
			</nav>
		</header>
	)
}

export default LearnableHeader;