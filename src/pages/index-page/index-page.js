import React from 'react';
import { A } from 'hookrouter'

function IndexPage() {
	return (
		<div>
			<h1>Index Page</h1>
			<A href="/contact">Contacts Page</A>
		</div>
	);
}

export default IndexPage;