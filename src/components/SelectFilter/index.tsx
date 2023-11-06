import { OptionProps, SelectFilterProps } from '@/types';
import { Listbox } from '@headlessui/react';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { IoFilterSharp } from 'react-icons/io5';

const SelectFilter: FC<SelectFilterProps> = ({ title, options }) => {
  const { query, push } = useRouter();
  const [selectData, setSelectData] = useState(options[0]);

  const toParamsHandle = (e: OptionProps) => {
    push({
      pathname: '/',
      query: {
        ...query,
        [`${title}`]: e.value,
        limit: 6,
        section: 'explore-car',
      },
    });
  };
  const selectChange = (e: OptionProps) => {
    setSelectData(e);
    toParamsHandle(e);
  };
  return (
    <div className="w-fit text-sm z-20">
      <Listbox value={selectData} onChange={e => selectChange(e)}>
        <div className="relative w-fit">
          <Listbox.Button className="relative w-full min-w-[127px] flex text-left justify-between items-center cursor-default drop-shadow bg-white py-2 px-4 rounded">
            {selectData.title}
            <IoFilterSharp className="text-gray-500" />
          </Listbox.Button>
          <Listbox.Options className="absolute rounded w-full bg-white mt-2 max-h-60 overflow-auto drop-shadow">
            {options.map(option => (
              <Listbox.Option
                key={option.title}
                value={option}
                className={({ active }) =>
                  `realtive text-sm cursor-default select-none py-2 pl-4 pr-4 ${
                    active ? 'bg-finology-blue text-white' : 'text-gray-900'
                  }`
                }
              >
                {option.title}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectFilter;
