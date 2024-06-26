'use client';
import { SearchManufacturerProps } from '@/types';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className={'absolute top-[14px] '}>
            <Image
              src={'/car-logo.svg'}
              alt="car icon"
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>
          <ComboboxInput
            className={'search-manufacturer__input'}
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          ></ComboboxInput>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {filteredManufacturers.slice(0, 5).map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className={`relative search-manufacturer__option  text-gray-900 data-[focus]:bg-primary-blue data-[focus]:text-white`}
                >
                  {item}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
