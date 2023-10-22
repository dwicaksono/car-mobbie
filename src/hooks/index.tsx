import { exploreHandler } from "@/helpers";
import {
	selectCars,
	setCars,
	setStartLoading,
	setStopLoading,
} from "@/state/carsSlice";
import { v4 as uuidv4 } from "uuid";
import { fetch } from "@/utils/axios";
import { Dispatch } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const fetchCars = (query: any): any => {
	return async (dispatch: Dispatch) => {
		dispatch(setStartLoading());
		try {
			const { data } = await fetch.get("/cars", {
				params: {
					...query,
				},
			});
			const newData = data?.map((item: any) => ({ ...item, id: uuidv4() }));
			dispatch(setCars(newData));
		} catch (error) {
			dispatch(setStopLoading());
			console.error(error, "handle with toast error");
		}
	};
};

export const useGetCars = () => {
	const productsRef = useRef<any>(null);
	const dispatch = useDispatch();
	const { query, push } = useRouter();
	const { carsState, isLoading } = useSelector(selectCars);

	useEffect(() => {
		if (!query?.limit) {
			dispatch(fetchCars({ limit: 6, year: 2022 }));
		} else {
			dispatch(fetchCars({ ...query }));
		}

		if (query?.section === "explore-car") {
			exploreHandler(query?.section);
		}
	}, [query]);

	const showMorehandler = () => {
		const { scrollTop, scrollHeight, clientHeight } = productsRef.current;
		const totalHeight = Math.round(scrollTop + clientHeight);
		setStartLoading();
		if (totalHeight >= scrollHeight - 1) {
			const newQuery = {
				...query,
				limit: carsState?.length + 6,
				year: !!query.year ? query.year : 2022,
			};
			dispatch(fetchCars(newQuery));
		}
	};
	return { carsState, isLoading, showMorehandler, productsRef, query };
};
