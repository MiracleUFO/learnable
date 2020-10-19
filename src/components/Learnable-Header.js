import React from 'react';
import {NavLink} from 'react-router-dom';


class LearnableHeader extends React.Component {

	navRef = React.createRef();
	

	componentDidMount() {
	let links = this.navRef.current.childNodes;
    let url = document.URL;
    
	for (let link of links) {
		if (url.includes(link.getAttribute('href'))) {
			link.setAttribute('class', ' yellowFont underline');
		} else link.setAttribute('class', ' whiteFont underline');
	}
}
	
	render() {
		return (

		<header id='learnableHeader' className='cadetBlue'>
			<nav id='learnableNav' ref={this.navRef}>
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
}

export default LearnableHeader;