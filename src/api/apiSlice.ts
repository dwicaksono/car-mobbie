import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders(headers) {
      if (process.env.NEXT_PUBLIC_RAPID_API_KEY) {
        headers.set('X-API-Key', process.env.NEXT_PUBLIC_RAPID_API_KEY);
      }
      return headers;
    },
  }),
  tagTypes: ['CARS'],
  endpoints: build => ({}),
});
