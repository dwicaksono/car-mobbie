import Image from "next/image";
import React, { FC, useState } from "react";
import { FaGears } from "react-icons/fa6";
import { PiSteeringWheelFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { Button, ModalDetail } from "..";
import { Transmisi } from "@/constants";
import { CarProp } from "@/types";

const CardCars: FC<CarProp | any> = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);
	console.log(item);
	return (
		<>
			<div className=" w-full h-full p-4 flex flex-col bg-slate-200/50 hover:bg-white hover:drop-shadow-lg rounded-md overflow-hidden">
				<div className="flex justify-between items-end">
					<div className="flex flex-col">
						<h5 className="capitalize font-light leading-none">{item?.make}</h5>
						<h2 className="capitalize font-bold text-2xl truncate  max-w-[210px] leading-none">
							{item?.model}
						</h2>
						<p className="text-xs leading-none font-thin w-50">{item?.class}</p>
					</div>
				</div>

				<p className="flex justify-end text-right text-4xl font-extrabold pr-12">
					<span className="font-semibold self-start text-base">$</span>
					1000
				</p>
				<div className=" w-full h-36 object-contain  mb-4">
					<Image
						src="/bmw.png"
						alt="car"
						priority
						width={200}
						height={100}
						className="object-contain w-full h-full"
					/>
				</div>
				<div className="flex justify-center gap-4 mb-4">
					<div className="flex flex-col justify-center items-center">
						<PiSteeringWheelFill className="text-xl text-finology-blue" />
						<p className="text-xs leading-none ">{item?.drive}</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<FaGears className="text-xl text-finology-blue" />
						<p className="text-xs leading-none lowercase">
							{Transmisi[item?.transmission]}
						</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<BsFillFuelPumpFill className="text-lg text-finology-blue" />
						<p className="text-xs leading-none ">{item?.fuel_type}</p>
					</div>
				</div>
				<Button title="view more" clickButton={() => setIsOpen(true)} />
			</div>
			<ModalDetail data={item} open={isOpen} onClose={() => setIsOpen(false)} />
		</>
	);
};

export default CardCars;
