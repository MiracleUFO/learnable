import React from 'react';
import icon from '../images/header/GenesysIcon.png';
import menu from '../images/header/menu.png';
import {NavLink} from 'react-router-dom'

class Header extends React.Component {

	navRef = React.createRef();
	mobileNavRef = React.createRef();

	state = {
		burgerOpen : false,
		navClass: 'nav'
	}
	
	activeLinks = () => {
		let ref = this.state.burgerOpen ? this.mobileNavRef.current : this.navRef.current;
		let links = ref.childNodes;
		let url = document.URL;

		for (let link of links) {
			if (url.includes( link.getAttribute('href'))) {
				link.setAttribute('class', ' orangeFont');
			} else link.setAttribute('class', '');
		}
	}

	componentDidMount() {
		this.activeLinks();
		document.getElementsByTagName('body')[0].style.overflowY = 'visible';
	}

	componentDidUpdate() {
		this.activeLinks();
	}

	handleClick = (e) => {
		if(this.state.burgerOpen) {
			this.setState({...this.state, burgerOpen: false, navClass: 'nav'});
			document.getElementsByTagName('body')[0].style.overflowY = 'visible';
		} else {
			this.setState({...this.state, burgerOpen: true, navClass: 'navBurgerOpen'});
			document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
		}
	}

	render() {
	return (
		<header id='header'>
			<nav id='nav' className={this.state.navClass}>
			<NavLink to='/'><img src={icon} alt='Genesys icon' id='genesysIcon'/></NavLink>

			<div ref={this.navRef} className='longMenu'>
				<NavLink to='/Learnable'>LEARNABLE</NavLink>
				<NavLink to='/null'>AGORA</NavLink>
				<NavLink to='/null'>STARTZONE</NavLink>
				<NavLink to='/null'>ABOUT</NavLink>
				<NavLink to='/null'>CONTACT</NavLink>
			</div>

			<div id='devStudio' className='longMenu'><span>build with</span><button><NavLink to='#'>DEVSTUDIO</NavLink></button></div>
		
			{!this.state.burgerOpen ?
				<NavLink to='#' className='menuIcon' onClick={this.handleClick}><img src={menu} alt='Menu' /></NavLink>
			:
				<NavLink to='#' className='menuIcon' onClick={this.handleClick}>X</NavLink>
			}

			{!this.state.burgerOpen ? '' : 
				<div id='burgerMenu' className='burgerShort'>
					<div ref={this.mobileNavRef} className='flexColumn'>
						<NavLink to='/Learnable'>LEARNABLE</NavLink>
						<NavLink to='/null'>AGORA</NavLink>
						<NavLink to='/null'>STARTZONE</NavLink>
						<NavLink to='/null'>ABOUT</NavLink>
						<NavLink to='/null'>CONTACT</NavLink>
					</div>

					<div id='devStudio' className='flexColumn'><button><NavLink to='#'>DEVSTUDIO</NavLink></button></div>
				</div>
			}
			</nav>
		</header>
	)
	}
}

export default Header;