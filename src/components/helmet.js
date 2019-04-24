import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default () => (
	<StaticQuery
		query={graphql`
			query helmetQuery {
				site {
					siteMetadata {
						title
						author
						imageUrl
						description
						keywords
					}
				}
			}
		`}
		render={data => (
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
				/>
				<link rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
				 	integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
				 	crossorigin="anonymous"
				/>
				<link rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
				 	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
				 	crossorigin="anonymous"
				/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"/>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css"/>
				<link href="~bulma-carousel/dist/css/bulma-carousel.min.css" rel="stylesheet"/>
				<meta name="description" content={data.site.siteMetadata.description} />
				<meta name="keywords" content={data.site.siteMetadata.keywords} />
				<title>{data.site.siteMetadata.title}</title>
				<html lang="en" />
				{/* Google / Search Engine Meta Tags */}
				<meta itemprop="name" content={data.site.siteMetadata.author} /> />
				<meta
					itemprop="description"
					content={data.site.siteMetadata.description}
				/>
				<meta itemprop="image" content={data.site.siteMetadata.imageUrl} /> />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
			</Helmet>
		)}
	/>
);
