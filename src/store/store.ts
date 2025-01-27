import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { userSlice } from './user/user.slice';

const rootReducer = combineReducers({
	user: userSlice.reducer
});

export const store = configureStore({
	reducer: rootReducer
});

export type TypeRootState = ReturnType<typeof rootReducer>;
