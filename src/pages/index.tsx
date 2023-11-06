import {
  Button,
  CardCars,
  CardLoading,
  EmptyState,
  Hero,
  ModalDetail,
  Search,
  SelectFilter,
} from '@/components';
import { engine, yearsOfCar } from '@/constants';
import { useGetCarsQuery } from '@/state/carsSlice';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useGetCars } from '@/hooks';

const HeroSection = dynamic(() => import('@/components/Hero'));
export default function Home() {
  const {
    data,
    isLoading,
    isSuccess,
    error,
    isFetching,
    isNoMore,
    showMorehandler,
  } = useGetCars();
  console.log(isLoading);

  return (
    <>
      <Head>
        <title>Cars 🚗</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <HeroSection />
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
              <SelectFilter title="fuel_type" options={engine} />
              <SelectFilter title="year" options={yearsOfCar} />
            </div>
          </div>
        </div>
        <section className="max-width px-10" id="products">
          {isLoading || isFetching ? (
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
              <CardLoading />
              <CardLoading />
              <CardLoading />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
              {data?.map((item: any) => (
                <CardCars item={item} key={item?.id} />
              ))}
            </div>
          )}
          {!isNoMore && (
            <div className="mt-10 flex justify-center w-full">
              <Button clickButton={showMorehandler} title="Show more" />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
