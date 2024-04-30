import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { createReduxStore } from './store';
import router from './router';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={createReduxStore()}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
