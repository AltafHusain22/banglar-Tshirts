import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
	const tShirts = useLoaderData()
	return (
		<div>
			<h2>this is home page </h2>
			<h2> Total t-shirts lenght : {tShirts.length}</h2>
		</div>
	);
};

export default Home;