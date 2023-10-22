import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "@/state/carsSlice";

export const store = configureStore({
	reducer: {
		cars: carsReducer,
	},
});

export type Roostate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
