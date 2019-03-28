import React from 'react';
import './style.scss';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => (
	<div className="block ">
		<nav className="navbar is-active is-size-5 ">
			<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
			<div id="navMenu" className="navbar-menu">
				<a href="" className="navbar-item">Home</a>
				<a href="" className="navbar-item">Architecture</a>
				<a href="" className="navbar-item">Interriors</a>
				<a href="" className="navbar-item">Extras</a>
				<a href="" className="navbar-item">WebDev</a>
				<a href="" className="navbar-item">Hobby</a>
				<a href="" className="navbar-item">Contact</a>
			</div>
		</nav>
		<div className="navbar-social-menu is-size-3 is-inline-flex">
			<a href="" className="navbar-item">
				<span className="navbar-icon">
					<i className="fab fa-github"></i>
				</span>
			</a>
			<a href="" className="navbar-item">
				<span className="navbar-icon">
					<i className="fab fa-linkedin"></i>
				</span>
			</a>
		</div>
	</div>
);

export default Navbar;
