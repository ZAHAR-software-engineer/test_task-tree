import { ReactNode } from 'react';
import style from './Modal.module.scss';

export interface ModalProps {
	children: ReactNode;
	title: string;
}

export const Modal = ({ title, children, ...otherProps }: ModalProps) => {
	return (
		<div className={style.conteiner}>
			<dialog {...otherProps} className={style.modal}>
				<div className={style.header}>
					<h1 className={style.title}>{title}</h1>
				</div>
				<div className={style.body}>{children}</div>
			</dialog>
		</div>
	);
};
