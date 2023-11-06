import { apiSlice } from '@/api/apiSlice';
import { createEntityAdapter, nanoid } from '@reduxjs/toolkit';

const carsAdapter = createEntityAdapter({
  sortComparer: (a: { make: string }, b: { make: string }) =>
    b.make.localeCompare(a.make),
});

const initialState = carsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCars: builder.query({
      query: ({ make, limit = 6, year = 2022, fuel_type }) => {
        return {
          url: `/cars`,
          params: {
            make,
            limit,
            year,
            fuel_type,
          },
          method: 'GET',
        };
      },
      providesTags: ['CARS'],
      transformResponse: (responseData: any) => {
        const newResponse = responseData.map((item: any) => ({
          ...item,
          id: nanoid(),
        }));
        return newResponse;
      },
    }),
  }),
});

export const { useGetCarsQuery } = extendedApiSlice;
