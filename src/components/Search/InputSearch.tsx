import { brands } from "@/constants";
import { SearchBrandsProps } from "@/types";
import { Combobox } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const InputSearch = ({ brand, setBrand }: SearchBrandsProps) => {
	const { query } = useRouter();
	const [queryInput, setQueryInput] = useState("");

	const filteredManufacturers =
		queryInput === ""
			? brands
			: brands.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(queryInput.toLowerCase().replace(/\s+/g, ""))
			  );

	return (
		<div className="flex-1 max-sm:w-full  flex justify-start items-center">
			<Combobox value={brand} onChange={setBrand}>
				<div className="w-full relative z-10">
					<div className="flex">
						<Combobox.Input
							as="input"
							className="w-full h-10 py-2 px-4 outline-none cursor-pointer text-sm"
							displayValue={(item: any) => item || query?.make}
							onChange={(event) => setQueryInput(event.target.value)} // Update the search queryInput when the input changes
							placeholder="search brand"
						/>
					</div>
					<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{filteredManufacturers.length === 0 && queryInput !== "" ? (
							<Combobox.Option
								className="text-gray-400 p-10 text-sm font-extralight text-center"
								value={queryInput}>
								-- no data --
							</Combobox.Option>
						) : (
							filteredManufacturers?.map((item) => (
								<Combobox.Option
									key={item}
									value={item}
									className={({ active }) =>
										`text-sm cursor-default select-none py-2 pl-4 pr-4 ${
											active ? "bg-finology-blue text-white" : "text-gray-900"
										}`
									}>
									{item}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</div>
			</Combobox>
		</div>
	);
};

export default InputSearch;
