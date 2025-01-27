import { ReactNode } from 'react';
import style from './ButtonForm.module.scss';

export interface ButtonFormProps {
	children: ReactNode;
	onClick: () => void;
}

export const ButtonForm = ({ children, onClick }: ButtonFormProps) => {
	return (
		<button type="button" className={style.button} onClick={onClick}>
			{children}
		</button>
	);
};
