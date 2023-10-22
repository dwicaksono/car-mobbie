import { ButtonProps } from "@/types";
import { FC } from "react";

const Button: FC<ButtonProps> = ({ title, clickButton }) => {
	return (
		<div
			className="rounded-full bg-finology-blue flex flex-row relative justify-center items-center py-2 px-6 outline-none cursor-pointer"
			onClick={clickButton}>
			<span className="text-white font-light">{title}</span>
		</div>
	);
};

export default Button;
