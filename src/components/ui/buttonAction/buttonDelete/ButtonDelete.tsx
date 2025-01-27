import style from './ButtonDelete.module.scss';

export interface ButtonDeleteProps {
	onClick: () => void;
}

export const ButtonDelete = ({ onClick }: ButtonDeleteProps) => {
	return (
		<button type="button" className={style.button} onClick={onClick}>
			<svg
				width="80px"
				height="80px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g>
				<g id="SVGRepo_iconCarrier">
					{' '}
					<path
						d="M6 5H18M9 5V5C10.5769 3.16026 13.4231 3.16026 15 5V5M9 20H15C16.1046 20 17 19.1046 17 18V9C17 8.44772 16.5523 8 16 8H8C7.44772 8 7 8.44772 7 9V18C7 19.1046 7.89543 20 9 20Z"
						stroke="#000000"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>{' '}
				</g>
			</svg>
		</button>
	);
};
