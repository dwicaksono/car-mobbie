import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCarSportSharp } from "react-icons/io5";

const Footer = () => {
	return (
		<footer className="flex flex-col text-black-100  mt-10 border-t border-gray-100 max-width">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 px-10 py-4">
				<div className="flex flex-col justify-start items-start gap-6">
					<div className="flex items-center gap-4">
						<IoCarSportSharp className="text-2xl text-finology-blue" />
						<p className="text-lg font-medium text-finology-blue">
							Cars Mobbie
						</p>
					</div>
					<p className="text-base text-gray-700">
						Cars Mobbie 2023 <br />
						All Rights Reserved &copy;
					</p>
				</div>

				<div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
					{footerLinks.map((item) => (
						<div key={item.title} className="footer__link">
							<h3 className="font-bold">{item.title}</h3>
							<div className="flex flex-col gap-5">
								{item.links.map((link) => (
									<Link
										key={link.title}
										href={link.url}
										className="text-gray-500">
										{link.title}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 px-10 py-4">
				<p className="text-gray-500">@2023 Cars Mobbie. All rights reserved</p>

				<div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
					<Link href="/" className="text-gray-500">
						Privacy & Policy
					</Link>
					<Link href="/" className="text-gray-500">
						Terms & Condition
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
