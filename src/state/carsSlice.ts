import { createSlice } from "@reduxjs/toolkit";
import { Roostate } from "./store";

const initialState: any = {
	carsState: [],
	isLoading: false,
};
const carsSlice = createSlice({
	name: "carsMobbie",
	initialState,
	reducers: {
		setCars: (state, action) => ({
			...state,
			isLoading: false,
			carsState: action.payload,
		}),
		setStartLoading: (state) => ({
			...state,
			isLoading: true,
		}),
		setStopLoading: (state) => ({
			...state,
			isLoading: false,
		}),
	},
});

export const { setCars, setStartLoading, setStopLoading } = carsSlice.actions;
export const selectCars = (state: Roostate) => state.cars;
export default carsSlice.reducer;
