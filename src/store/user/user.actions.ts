import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ITreeResponce } from './user.interface';
import { UserService } from 'services/user/user.service';
import {
	IDataCreateNode,
	IDataDeleteNode,
	IDataRenameNode,
	IDataTree
} from 'types/user.interface';

export const getTree = createAsyncThunk<ITreeResponce, IDataTree>(
	'user/getTree',
	async (data, thunkApi) => {
		try {
			const response = await UserService.getTree(data);
			return response.data;
		} catch (e) {
			return thunkApi.rejectWithValue(e);
		}
	}
);

export const createNode = createAsyncThunk<AxiosResponse, IDataCreateNode>(
	'user/create-node',
	async (data, thunkApi) => {
		try {
			const response = UserService.createNode(data);
			return response;
		} catch (e) {
			return thunkApi.rejectWithValue(e);
		}
	}
);

export const renameNode = createAsyncThunk<AxiosResponse, IDataRenameNode>(
	'user/rename-node',
	async (data, thunkApi) => {
		try {
			const response = UserService.updateNode(data);
			return response;
		} catch (e) {
			return thunkApi.rejectWithValue(e);
		}
	}
);
export const deleteNode = createAsyncThunk<AxiosResponse, IDataDeleteNode>(
	'user/delete-node',
	async (data, thunkApi) => {
		try {
			const response = UserService.deleteNode(data);
			return response;
		} catch (e) {
			return thunkApi.rejectWithValue(e);
		}
	}
);
