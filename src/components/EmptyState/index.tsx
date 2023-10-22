import React, { memo } from "react";
import { IoCarSportSharp } from "react-icons/io5";

const EmptyState = () => {
	return (
		<div className="w-full h-96 flex flex-col justify-center items-center">
			<IoCarSportSharp className="text-4xl text-gray-400 " />
			<p className="text-sm capitalize text-gray-400">no data</p>
		</div>
	);
};

export default memo(EmptyState);
