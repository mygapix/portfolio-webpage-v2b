import React from 'react';
import './style.scss';
import bulmaCarousel from 'bulma-carousel';
import img1 from '../images/arch/a1.jpg';
import img2 from '../images/arch/a2.jpg';
import img3 from '../images/arch/a3.jpg';
import img4 from '../images/arch/a4.jpg';
import img5 from '../images/arch/a5.jpg';


export default class Architecture extends React.Component {
	constructor(props) {
		super(props);
		console.log('constructor');
	}

	componentDidMount() {
		console.log('component did mount');
		const carousel = bulmaCarousel.attach('#carousel-demo', {
			slidesToScroll: 1,
			slidesToShow: 2,
			loop: true,
			infinite: true,
			
		});
		console.log('carousel', carousel);
	}
	render() {
		console.log('render');
		return (
			<div className="container-arch">
				<div className="title is-1">
					<h4>ARCHITECTURE</h4>
				</div>
					<div id="carousel-demo" className="carousel" >
			 			<div className="img-wrapper item-1">
							<img src={img1}/>
							<p className="img-description">Opis</p>
						</div>
						<div className="img-wrapper item-2">
							<img src={img2}/>
							<p className="img-description">Opis vasgregerg</p>
						</div>
						<div className="img-wrapper item-3">
							<img src={img3}/>
							<p className="img-description">Opis dfb  dfbbd b dfbdfbfdb dfdffb</p>
						</div>
						<div className="img-wrapper item-4">
							<img src={img4}/>
							<p className="img-description">Opis dfbdf dfbd jyrtshb erggr wefvedvdfrgvreg  thr</p>
				  	</div>
						<div className="img-wrapper item-5">
							<img src={img5}/>
							<p className="img-description">Opis</p>
				  	</div>
					</div>
			</div>
		);
	}
}
