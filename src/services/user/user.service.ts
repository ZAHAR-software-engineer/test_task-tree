import { instance } from 'api/api.interface';
import { EnumTypeURLRequest } from 'services/service.enum';
import {
	IDataCreateNode,
	IDataDeleteNode,
	IDataRenameNode,
	IDataTree,
	ITree
} from 'types/user.interface';

export const UserService = {
	async getTree(data: IDataTree) {
		return instance<ITree>({
			url: EnumTypeURLRequest.tree,
			params: data
		});
	},
	async createNode(data: IDataCreateNode) {
		return instance({
			url: EnumTypeURLRequest['create-node'],
			params: data
		});
	},
	async updateNode(data: IDataRenameNode) {
		return instance({
			url: EnumTypeURLRequest['rename-node'],
			params: data
		});
	},
	async deleteNode(data: IDataDeleteNode) {
		return instance({
			url: EnumTypeURLRequest['delete-node'],
			params: data
		});
	}
};
