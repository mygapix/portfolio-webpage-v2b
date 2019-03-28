import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Architecture from './architecture';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<Architecture />
		<Footer />
	</div>
);

export default Layout;
