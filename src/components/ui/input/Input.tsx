import { ChangeEvent } from 'react';
import style from './Input.module.scss';

interface InputProps {
	name: string;
	tittle: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

export const Input = ({ tittle, name, onChange, value }: InputProps) => {
	return (
		<div className={style.wrapper}>
			<div className={style.tittle}>{tittle}</div>
			<div className={style.container}>
				<input
					tabIndex={0}
					name={name}
					onChange={onChange}
					value={value}
					className={style.input}
				/>
			</div>
		</div>
	);
};
