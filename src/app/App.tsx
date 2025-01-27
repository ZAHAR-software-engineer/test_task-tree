import { FormCreateNode } from 'components/form/FormCreateNode/FormCreateNode';
import { ArrowDown } from 'components/ui/arrowDown/ArrowDown';
import { useAction } from 'hooks/useAction';
import { useEffect, useState } from 'react';
import style from './App.module.scss';
import { useUser } from '../hooks/useUser';
import { Tree } from 'components/tree/Tree';

const App = () => {
	const [isExpandedChilds, setIsExpandedChilds] = useState(false);

	const {
		tree: { children, id, name },
		isSuccessfully
	} = useUser();

	const { getTree } = useAction();

	useEffect(() => {
		getTree({ treeName: name });
	}, [isSuccessfully]);

	const expendChilds = () => {
		setIsExpandedChilds(!isExpandedChilds);
	};

	return (
		<div className={style.app}>
			<div className={style.tree}>
				<div className={style.node}>
					<div className={style.arrow}>
						{children[0] && (
							<ArrowDown onClick={expendChilds} isExtended={isExpandedChilds} />
						)}
					</div>
					<div className={style.title}>{name}</div>
					<FormCreateNode parentId={id} treeName={name} />
				</div>
				{isExpandedChilds &&
					children.map(child => (
						<div className={style.tree}>
							<Tree key={child.id} treeName={name} {...child} />
						</div>
					))}
			</div>
		</div>
	);
};

export default App;
