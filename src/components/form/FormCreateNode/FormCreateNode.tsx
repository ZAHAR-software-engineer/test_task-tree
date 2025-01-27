import { ButtonCreate } from 'components/ui/buttonAction/buttonCreate/ButtonCreate';
import { ButtonForm } from 'components/ui/buttonForm/ButtonForm';
import { Input } from 'components/ui/input/Input';
import { Modal } from 'components/ui/modal/Modal';
import { useAction } from 'hooks/useAction';
import { ChangeEvent, useId, useState } from 'react';
import style from './FormCreateNode.module.scss';

interface FormCreateNodeProps {
	parentId: number | string;
	treeName: string;
}

export const FormCreateNode = ({ parentId, treeName }: FormCreateNodeProps) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [nodeName, setNameNode] = useState('');
	const id = useId();

	const { createNode } = useAction();

	const sendNewNode = () => {
		createNode({ nodeName, parentNodeId: parentId, treeName });
		closeModel();
		setNameNode('');
	};

	const observerValues = (e: ChangeEvent<HTMLInputElement>) => {
		setNameNode(e.currentTarget.value);
	};

	const openModel = () => {
		setModalVisible(true);
	};

	const closeModel = () => {
		setModalVisible(false);
		setNameNode('');
	};

	return (
		<div className={style.form} key={id}>
			<ButtonCreate onClick={openModel} />
			{modalVisible && (
				<Modal title="ADD NODE">
					<Input
						onChange={observerValues}
						tittle="nameNode"
						value={nodeName}
						name="nameNode"
					/>
					<div className={style.buttonContainer}>
						<ButtonForm onClick={closeModel}>CHANEL</ButtonForm>
						<ButtonForm onClick={sendNewNode}>ADD</ButtonForm>
					</div>
				</Modal>
			)}
		</div>
	);
};
