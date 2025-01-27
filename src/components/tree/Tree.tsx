import { FormCreateNode } from 'components/form/FormCreateNode/FormCreateNode';
import { FormDeleteNode } from 'components/form/FormDeleteNode/FormDeleteNode';
import { FormEditNode } from 'components/form/FormEditNode/FormEditNode';
import { ArrowDown } from 'components/ui/arrowDown/ArrowDown';
import { useState } from 'react';
import { ITree } from 'types/user.interface';
import style from './Tree.module.scss';

interface TreeProps {
	name: string;
	id: string | number;
	children: ITree[];
	treeName: string;
}

export const Tree = ({ name, id, children, treeName }: TreeProps) => {
	const [isExpandedChilds, setIsExpandedChilds] = useState(false);

	const expendChilds = () => {
		setIsExpandedChilds(!isExpandedChilds);
	};

	return (
		<div className={style.tree}>
			<div className={style.node}>
				<div className={style.arrow}>
					{children[0] && (
						<ArrowDown onClick={expendChilds} isExtended={isExpandedChilds} />
					)}
				</div>
				<div className={style.title}>{name}</div>
				<FormCreateNode parentId={id} treeName={treeName} />
				<FormDeleteNode parentId={id} treeName={treeName} />
				<FormEditNode nameNode={name} nodeId={id} treeName={treeName} />
			</div>

			{isExpandedChilds &&
				children.map(child => (
					<div className={style.tree}>
						<Tree key={child.id} treeName={treeName} {...child} />
					</div>
				))}
		</div>
	);
};
