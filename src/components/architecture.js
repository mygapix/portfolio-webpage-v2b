import React from 'react';
import './style.scss';
import bulmaCarousel from 'bulma-carousel';
import Helmet from 'react-helmet';
import img1 from '../images/arch/a1.jpg';

export default class Architecture extends React.Component {
	constructor(props) {
		super(props);
		console.log('constructor');

	}
	componentDidMount() {
		console.log('component did mount');
		const carousel = bulmaCarousel.attach('#carousel-demo', {});
		console.log('carousel', carousel);
	}
	render() {
		console.log('render');
		return (
			<div id="carousel-demo" className="carousel">
				<div className="img-wrapper item-1">
					<img src={img1}/>
					<p className="img-description">Opis</p>
				</div>
				<div className="img-wrapper item-2">
					<img src={img1}/>
				</div>
				<div className="img-wrapper item-3">
					<img src={img1}/>
				</div>
			</div>
		);
	}
}
			
