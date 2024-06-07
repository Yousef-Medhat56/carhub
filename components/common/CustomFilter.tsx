'use client';
import { CustomFilterProps } from '@/types';
import {
  Listbox,
  Transition,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, Fragment } from 'react';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (title: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(title, value.toLowerCase());

    searchParams.delete('limit');

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}#discover`;

    router.push(newPathname);
  };
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(title, e.value);
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className={'custom-filter__btn'}>
            <span className="block truncate font-medium">
              {selected.value || selected.title}
            </span>
            <Image
              src={'/chevron-up-down.svg'}
              width={20}
              height={20}
              className="object-contain ml-4"
              alt="chevron"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className={'custom-filter__options'}>
              {options.map((option, index) => (
                <ListboxOption
                  key={index}
                  value={option}
                  className={
                    'relative cursor-default select-none py-2 px-4 data-[focus]:bg-primary-blue data-[focus]:text-white'
                  }
                >
                  <span>{option.title}</span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
