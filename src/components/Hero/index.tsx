import React, { memo } from "react";
import { Button } from "@/components";
import Image from "next/image";
import { exploreHandler } from "@/helpers";

const Hero = () => {
	return (
		<div className="flex xl:flex-row flex-col gap-2 relative pt-10 z-0 max-width  overflow-hidden">
			<div className="flex-1 px-6 sm:px-16 w-full ">
				<h1 className="  sm:text-[64px] z-10 text-[40px] font-bold leading-none ">
					Lorem ipsum dolor sit amet Soluta voluptates dolore labore placeat
					sunt nesciunt.
				</h1>
				<p className="text-[27px] text-gray-400 mb-10 font-light mt-5 leading-none">
					Soluta voluptates dolore labore placeat sunt nesciunt laboriosam
				</p>
				<Button
					title="Explore More"
					clickButton={() => exploreHandler("explore-car")}
				/>
			</div>
			<div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen overflow-hidden">
				<div className="relative xl:w-full w-[90%] xl:h-full h-[590px]">
					<Image
						src="/bmw.png"
						alt="car"
						fill
						priority
						sizes="100%"
						className="object-contain z-10 absolute"
					/>
					<div className=" -right-16 w-[500px] h-[500px] top-10 bg-finology-blue absolute rounded-full drop-shadow-lg" />
					<div className=" -right-14 w-[500px] h-[500px] top-10 bg-transparent border border-finology-green absolute rounded-full" />
					<div className=" -right-20 w-[500px] h-[500px] top-10 bg-transparent border border-white absolute rounded-full" />
				</div>
			</div>

			<div className=" -z-10 -left-32 w-[500px] h-[500px] -top-56 bg-finology-green/80 absolute rounded-full drop-shadow-lg" />
			<div className=" -left-36 -z-10 w-[500px] h-[500px] -top-56 bg-transparent border border-finology-blue absolute rounded-full" />
		</div>
	);
};

export default memo(Hero);
