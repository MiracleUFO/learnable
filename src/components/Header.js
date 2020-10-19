import React from 'react';
import icon from '../images/header/GenesysIcon.png';
import {NavLink} from 'react-router-dom'

class Header extends React.Component {

	navRef = React.createRef();

	componentDidMount() {
			let url = document.URL;
			let links = this.navRef.current.childNodes;

			for (let link of links) {
				if (url.includes(link.getAttribute('href'))) {
					link.setAttribute('class', ' orangeFont');
				}
			}
	}

	render() {
	return (
		<header id='header'>
			<nav id='nav' >
			<div ref={this.navRef}>
				<NavLink to='/'><img src={icon} alt='Genesys icon' id='genesysIcon'/></NavLink>
				<NavLink to='/Learnable'>LEARNABLE</NavLink>
				<NavLink to='null'>AGORA</NavLink>
				<NavLink to='null'>STARTZONE</NavLink>
				<NavLink to='null'>ABOUT</NavLink>
				<NavLink to='null'>CONTACT</NavLink>
			</div>

			<div id='devStudio'><span>build a product with</span> <button><NavLink to='#'>DEVSTUDIO</NavLink></button></div>
			</nav>
		</header>
	)
	}
}

export default Header;