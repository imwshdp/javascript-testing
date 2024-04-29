import React from 'react';

const ErrorPage = () => {
	return (
		<section className='content'>
			<div data-testid='error-page'>
				<h1>Oops... Something is wrong!</h1>
				<span>This page is not exist</span>
			</div>
		</section>
	);
};

export default ErrorPage;
