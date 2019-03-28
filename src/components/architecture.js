import React from 'react';
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
	FaOsi
} from 'react-icons/fa';
import './style.scss';
import Emoji from './emoji';
import MyComponent from './archGallery';

const Architecture = () => (
	<div>
		<section className="section is-fullheight">
			<div className="container">
				<MyComponent />
			</div>
		</section>
	</div>
);

export default Architecture;
