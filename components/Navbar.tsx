// "use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomButton from './common/CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="mx-auto max-w-[1440px] flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={'/'} className="flex items-center justify-center">
          <Image
            src={'/logo.svg'}
            alt="Car hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title={'Sign In'}
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
