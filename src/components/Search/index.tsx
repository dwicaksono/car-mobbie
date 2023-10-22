import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import InputSearch from "./InputSearch";
import { useRouter } from "next/router";

const Search = () => {
	const { query, push } = useRouter();
	const [brand, setBrand] = useState("");

	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		push({
			pathname: "/",
			query: {
				...query,
				make: brand,
				limit: 6,
				year: 2022,
				section: "explore-car",
			},
		});
	};

	const deleteHandler = () => {
		setBrand("");
		push({
			pathname: "/",
			query: {
				...query,
				make: "",
				limit: 6,
				year: 2022,
				section: "explore-car",
			},
		});
	};

	return (
		<form
			onSubmit={searchHandler}
			className=" flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl">
			<div className="flex-1 max-sm:w-full flex justify-start items-center relative">
				<InputSearch brand={brand} setBrand={setBrand} />
				{(!!brand || !!query?.make) && (
					<button
						className="border-l bg-white h-10 w-10 flex justify-center items-center"
						onClick={deleteHandler}>
						X
					</button>
				)}
				<button
					className="border-l bg-white h-10 w-10 flex justify-center items-center"
					type="submit">
					<BiSearchAlt className="text-xl text-finology-blue" />
				</button>
			</div>
		</form>
	);
};

export default Search;
