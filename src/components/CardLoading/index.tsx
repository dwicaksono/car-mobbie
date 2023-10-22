import React, { memo } from "react";
import { IoCarSportSharp } from "react-icons/io5";

const CardLoading = () => {
	return (
		<div className="animate-pulse bg-slate-200/50  text-gray-400 rounded-md w-full h-96 flex flex-col justify-center items-center p-10">
			<IoCarSportSharp className="text-4xl animate-bounce" />
			<p>... loading ...</p>
		</div>
	);
};

export default memo(CardLoading);
