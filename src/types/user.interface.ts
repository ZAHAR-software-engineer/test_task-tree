export interface ITree {
	id: number | string;
	name: string;
	children: ITree[];
}

export interface IDataTree {
	treeName: string;
}

export interface IDataCreateNode extends IDataTree {
	parentNodeId: number | string;
	nodeName: string;
}

export interface IDataDeleteNode extends IDataTree {
	nodeId: number | string;
}

export interface IDataRenameNode extends IDataDeleteNode {
	newNodeName: string;
}
