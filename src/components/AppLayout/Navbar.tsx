import Link from "next/link";
import React from "react";
import { IoCarSportSharp } from "react-icons/io5";
const Navbar = () => {
	return (
		<div className="max-width drop-shadow-lg py-4 px-10 border-b">
			<Link href="/">
				<div className=" flex gap-4 items-center">
					<IoCarSportSharp className="text-2xl text-finology-blue" />
					<p className="text-lg font-medium text-finology-blue">Cars Mobbie</p>
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
