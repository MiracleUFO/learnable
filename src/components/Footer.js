import React from 'react';
import {NavLink} from 'react-router-dom';
import  IG from '../images/footer/IG.png';
import  FB from '../images/footer/FB.png';
import  LI from '../images/footer/linkedIn.png';
import  twitter from '../images/footer/twitter.png';
import  vimeo from '../images/footer/vimeo.png';
import YT from '../images/footer/YT.png';
import footerImg from '../images/footer/footerImg.png';

function Footer() {
	return (
		<footer className='flexBox flexColumn'>

			<div id='footerRow1' className='flexBox'>
				<div className='flexColumn'>
					<NavLink to='/DevPage'>BUILD DIFFERENT</NavLink>
					<NavLink to='/DesignerPage'>DESIGN DIFFERENT</NavLink>
					<NavLink to='/Apply'>APPLY YOUR KNOWLEDGE</NavLink>
					<NavLink to='/FAQs'>FAQs</NavLink>
				</div>

				<div id='addressDiv' className='flexColumn'>
					<p>Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria</p>
					<NavLink to='#'>GET IN TOUCH</NavLink>	
				</div>

				<div id='footerImgDiv' className='flexBox'>
					<img src={footerImg} id='footerImg' alt=''/>
					<p>Learnable is proud to be a collaborative effort of all the arms of our product team
					<br />
					<NavLink to='#'>DEVSTUDIO</NavLink>
					</p>
				</div>
			</div>

			<div id='footerRow2' className='flexColumn'>
				<div id='footerIcons' className='flexBox'>
					<img src={twitter} alt='Twitter icon' />
					<img src={FB} alt='Facebook icon' />
					<img src={LI} alt='LinkedIn icon' />
					<img src={IG} alt='Instagram icon' />
					<img src={YT} alt='YouTube icon' />
					<img src={vimeo} alt='Vimeo icon' />
				</div>
				<div><span>Genesys 2020</span><span>Privacy Statement</span></div>
			</div>
			
		</footer>
	)
}

export default Footer;