import { ButtonEdit } from 'components/ui/buttonAction/buttonEdit/ButtonEdit';
import { ButtonForm } from 'components/ui/buttonForm/ButtonForm';
import { Input } from 'components/ui/input/Input';
import { Modal } from 'components/ui/modal/Modal';
import { ChangeEvent, useState } from 'react';
import style from './FormEditNode.module.scss';
import { useAction } from 'hooks/useAction';

interface FormEditNodeProps {
	nodeId: number | string;
	treeName: string;
	nameNode: string;
}

export const FormEditNode = ({
	nameNode,
	nodeId,
	treeName
}: FormEditNodeProps) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [newNodeName, setNewNodeName] = useState(nameNode);

	const { renameNode } = useAction();

	const renameNameNode = () => {
		renameNode({ newNodeName, nodeId, treeName });
		closeModel();
	};

	const observerValues = (e: ChangeEvent<HTMLInputElement>) => {
		setNewNodeName(e.currentTarget.value);
	};

	const openModel = () => {
		setModalVisible(true);
	};

	const closeModel = () => {
		setModalVisible(false);
	};

	return (
		<div className={style.form}>
			<ButtonEdit onClick={openModel} />

			{modalVisible && (
				<Modal title="RENAME NAME NODE">
					<Input
						onChange={observerValues}
						tittle="nameNode"
						value={newNodeName}
						name="nameNode"
					/>
					<div className={style.buttonContainer}>
						<ButtonForm onClick={closeModel}>CHANEL</ButtonForm>
						<ButtonForm onClick={renameNameNode}>APPLY</ButtonForm>
					</div>
				</Modal>
			)}
		</div>
	);
};
