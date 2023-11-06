import { exploreHandler } from '@/helpers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useGetCarsQuery } from '@/state/carsSlice';

export const useGetCars = () => {
  const { query, push } = useRouter();
  const { data, isLoading, isSuccess, error, isFetching } = useGetCarsQuery(
    query,
    {
      skip: !query,
    },
  );
  const [countLimit, setCounLimit] = useState(Number(query?.limit));
  useEffect(() => {
    if (query?.section === 'explore-car') {
      exploreHandler(query?.section);
    }
  }, [query]);

  const showMorehandler = () => {
    push({
      pathname: '/',
      query: {
        ...query,
        limit: data?.length + 6,
      },
    });
    setCounLimit(prev => prev + 1);
  };
  const isNoMore = countLimit - 6 >= Math.round(data?.length / 6);
  console.log(countLimit, Math.round(data?.length / 6));
  return {
    showMorehandler,
    query,
    data,
    isLoading,
    isSuccess,
    error,
    isNoMore,
    isFetching,
  };
};
