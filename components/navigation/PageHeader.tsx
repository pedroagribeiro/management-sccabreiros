import React, { useState } from 'react';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';

export type SubPage = {
  title: String;
  url: any;
};

export type SectionElements = {
  title: String;
  subpages?: SubPage[];
};

const PageHeader = ({ title, subpages }: SectionElements) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const updateDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div>
      <div className='w-full hidden lg:flex flex-col divide-y divide-gray-500 bg-gray-700 px-6 md:px-16 2xl:px-64 text-white font-agencygothic'>
        <h2 className='uppercase text-3xl py-8 font-medium'>{title}</h2>
        <div className='flex space-x-6'>
          {subpages?.map((item, index) => (
            <button className='mt-2' key={index}>
              <Link href={item.url}>
                <div className='flex flex-col hover:bg-white'>
                  <p className='uppercase bg-gray-700 pb-1'>{item.title}</p>
                  <div className='h-1 rounded-md'></div>
                </div>
              </Link>
            </button>
          ))}
        </div>
      </div>
      <div className='w-full flex lg:hidden font-agencygothic'>
        <div className='w-full'>
          <div className='w-full dropdown relative'>
            <button
              className={`w-full flex ${
                dropdownActive ? 'bg-green-600' : 'bg-gray-700'
              } px-4 justify-between py-2 text-white items-center dropdown-toggle transition duration-150 ease-in-out`}
              onClick={() => updateDropdown()}
            >
              <p className='uppercase text-md'>{title}</p>
              <IoMdArrowDropdown className='text-lg' />
            </button>
            <ul
              className={`dropdown-menu ${
                dropdownActive ? 'block' : 'hidden'
              } bg-white text-base text-left`}
            >
              {subpages?.map((item, index) => (
                <li key={index}>
                  <Link
                    className='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                    href={item.url}
                  >
                    <p className='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'>
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
