import {
	Button,
	CardCars,
	CardLoading,
	EmptyState,
	Hero,
	ModalDetail,
	Search,
	SelectFilter,
} from "@/components";
import { engine, yearsOfCar } from "@/constants";
import { useGetCars } from "@/hooks";
import { CarProp } from "@/types";
import Head from "next/head";
import { IoCarSportSharp } from "react-icons/io5";

export default function Home() {
	const { carsState, isLoading, showMorehandler, productsRef } = useGetCars();
	const isDataEmpty =
		!Array.isArray(carsState) || carsState.length < 1 || !carsState;

	return (
		<>
			<Head>
				<title>Cars 🚗</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<main className="overflow-hidden">
				<Hero />
				<div className="max-width pt-10" id="explore-car">
					<div className="px-10 mb-4">
						<h1 className="text-3xl font-semibold">Choose Your Car</h1>
						<p className="text-gray-400">
							Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className="px-10 py-4 w-full flex flex-wrap justify-between gap-8 drop-shadow">
						<Search />
						<div className="flex gap-2">
							<SelectFilter title="fuels" options={engine} />
							<SelectFilter title="Years" options={yearsOfCar} />
						</div>
					</div>
				</div>
				<section className="max-width px-10" id="products" ref={productsRef}>
					{isDataEmpty ? (
						<EmptyState />
					) : (
						<>
							<div className="grid grid-cols-1 md:grid-cols-3  gap-4">
								{isLoading ? (
									<>
										<CardLoading />
										<CardLoading />
										<CardLoading />
									</>
								) : (
									carsState?.map((item: CarProp) => (
										<CardCars item={item} key={item?.id} />
									))
								)}
							</div>
							<div className="mt-10 flex justify-center w-full">
								<Button clickButton={showMorehandler} title="Show more" />
							</div>
						</>
					)}
				</section>
			</main>
		</>
	);
}
