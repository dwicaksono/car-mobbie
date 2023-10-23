import { createSlice } from '@reduxjs/toolkit';
import { Roostate } from './store';

const initialState: any = {
  carsState: [],
  isLoading: false,
  countLimit: 6,
};
const carsSlice = createSlice({
  name: 'carsMobbie',
  initialState,
  reducers: {
    setCars: (state, action) => ({
      ...state,
      isLoading: false,
      carsState: action.payload,
    }),
    setStartLoading: state => ({
      ...state,
      isLoading: true,
    }),
    setStopLoading: state => ({
      ...state,
      isLoading: false,
    }),
    setCountLimit: state => ({
      ...state,
      countLimit: state.countLimit + 6,
    }),
    setResetLimit: state => ({
      ...state,
      countLimit: 6,
    }),
  },
});

export const {
  setCars,
  setStartLoading,
  setStopLoading,
  setCountLimit,
  setResetLimit,
} = carsSlice.actions;
export const selectCars = (state: Roostate) => state.cars;
export default carsSlice.reducer;
