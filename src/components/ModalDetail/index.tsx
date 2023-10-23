import { Dialog } from '@headlessui/react';
import React, { FC } from 'react';
import { Button, ContentDetail } from '..';
import Image from 'next/image';
import { Transmisi } from '@/constants';
import { ModalDetailProp } from '@/types';

const ModalDetail: FC<ModalDetailProp> = ({ data, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} as="div" className="z-10 relative">
      <div className="bg-white/80 fixed inset-0 flex w-screen items-center justify-center">
        <Dialog.Panel className="bg-white flex flex-col rounded-xl p-10 drop-shadow-xl">
          <div className="flex gap-4 mt-10">
            <div className="w-full">
              <Image
                src="/engine.png"
                alt="car"
                priority
                width={200}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="h-max w-full flex flex-col text-right leading-none ">
              <p className="text-2xl font-semibold">{data?.make}</p>
              <h1 className="capitalize text-5xl font-extrabold">
                {data?.model}
              </h1>
              <p className="text-2xl font-semibold">{data?.class}</p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <ContentDetail title="City Mpg" content={data?.city_mpg} />
                <ContentDetail
                  title="Comb Mpg"
                  content={data?.combination_mpg}
                />
                <ContentDetail title="Cylinders" content={data?.cylinders} />
                <ContentDetail title="Drive" content={data?.drive} />
                <ContentDetail title="fuel" content={data?.fuel_type} />
                <ContentDetail
                  title="highway mpg"
                  content={data?.highway_mpg}
                />
                <ContentDetail
                  title="transmission"
                  content={Transmisi[data?.transmission]}
                />
                <ContentDetail
                  title="displacement"
                  content={data?.displacement}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <Button title="close" clickButton={onClose} />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ModalDetail;
