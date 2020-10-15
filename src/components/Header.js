import React from 'react';
import icon from '../images/header/GenesysIcon.png';
import {NavLink} from 'react-router-dom'

function Header() {
	return (
		<header id='header' className='paddingMain'>
			<nav id='nav'>
			<div>
				<NavLink to='/'><img src={icon} alt='Genesys Icon' id='genesysIcon'/></NavLink>
				<NavLink to='/Learnable'>LEARNABLE</NavLink>
				<NavLink to='#'>AGORA</NavLink>
				<NavLink to='#'>STARTZONE</NavLink>
				<NavLink to='#'>ABOUT</NavLink>
				<NavLink to='#'>CONTACT</NavLink>
			</div>

			<div id='devStudio'><span>build a product with</span> <button><NavLink to='#'>DEVSTUDIO</NavLink></button></div>
			</nav>
		</header>
	)
}

export default Header;