import { ITree } from 'types/user.interface';

export interface IInitialState {
	isSuccessfully: boolean;
	tree: ITree;
}

export interface ITreeResponce extends ITree {}
