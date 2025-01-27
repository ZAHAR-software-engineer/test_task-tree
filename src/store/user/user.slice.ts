import { createSlice } from '@reduxjs/toolkit';
import { createNode, deleteNode, getTree, renameNode } from './user.actions';
import { IInitialState } from './user.interface';

const initialState: IInitialState = {
	isSuccessfully: false,
	tree: { id: 687, name: 'ZAHAR', children: [] }
};

export const userSlice = createSlice({
	initialState,
	name: 'user',
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getTree.fulfilled, (state, actions) => {
				state.tree = actions.payload;
			})
			.addCase(createNode.fulfilled, state => {
				state.isSuccessfully = !state.isSuccessfully;
			})
			.addCase(renameNode.fulfilled, state => {
				state.isSuccessfully = !state.isSuccessfully;
			})
			.addCase(deleteNode.fulfilled, state => {
				state.isSuccessfully = !state.isSuccessfully;
			});
	}
});
