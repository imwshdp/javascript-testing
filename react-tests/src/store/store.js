import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { default as counterReducer } from './reducers/counterReducer';

const rootReducer = combineReducers({
	counter: counterReducer
});

export const createReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState
	});
};
