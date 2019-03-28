import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './style.scss';
import Navbar from './navbar';
import Maks from '../images/Maks.jpg';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="photo">
				<img src={Maks} alt="."></img>
			</div>
		  <div className="container">
			 	<div className="home-block">
					<article className="message">
						<div className="message-header">
							<p>About Me</p>
						</div>
						<div className="message-body">
							Welcome to my portfolio.

						 My name is Max and I am 3D artist. I've been working in this branch since 2006
					   getting work experience partly overseas. After hours my passion is aviation and
						 cooking.
						 For a half year I've been preparing myself to join IT market by learning HTML,
						 CSS and Javascript coding languages and designing websites.
						 I'm constantly looking for interesting challenges and projects to work on.
						 If you willing to get in touch don't hesitate to contact me.

						 In the meantime please enjoy my galeries.
						</div>
					</article>
				</div>
			</div>
		</div>
	</section>
);

export default Header;
