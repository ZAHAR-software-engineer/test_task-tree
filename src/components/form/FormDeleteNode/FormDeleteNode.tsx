import { ButtonDelete } from 'components/ui/buttonAction/buttonDelete/ButtonDelete';
import { ButtonForm } from 'components/ui/buttonForm/ButtonForm';
import { Modal } from 'components/ui/modal/Modal';
import { useState } from 'react';
import style from './FormDeleteNode.module.scss';

import { useAction } from 'hooks/useAction';

interface FormDeleteNodeProps {
	parentId: string | number;
	treeName: string;
}

export const FormDeleteNode = ({ treeName, parentId }: FormDeleteNodeProps) => {
	const [modalVisible, setModalVisible] = useState(false);

	const { deleteNode } = useAction();

	const deleteCurrentNode = () => {
		deleteNode({ nodeId: parentId, treeName });
		closeModel();
	};

	const openModel = () => {
		setModalVisible(true);
	};

	const closeModel = () => {
		setModalVisible(false);
	};

	return (
		<div className={style.form}>
			<ButtonDelete onClick={openModel} />
			{modalVisible && (
				<Modal title={'DELETE NODE'}>
					<div>Are you shure that want to delete this node?</div>
					<div className={style.buttonContainer}>
						<ButtonForm onClick={closeModel}>CHANEL</ButtonForm>
						<ButtonForm onClick={deleteCurrentNode}>DELETE</ButtonForm>
					</div>
				</Modal>
			)}
		</div>
	);
};
