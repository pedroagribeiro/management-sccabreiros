import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMdPerson } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const upperBarItems: Array<any> = [];

  const lowerBarItems = [
    {
      title: 'Sócios',
      url: '/memberships',
    },
    {
      title: 'Contactos',
      url: '/contacts',
    },
    {
      title: 'Finanças',
      url: '/finances',
    },
  ];

  const [displayOfCanvas, setDisplayOfCanvas] = useState(false);

  const onClickOfCanvasToggle = () => {
    setDisplayOfCanvas(!displayOfCanvas);
  };

  return (
    <header className='bg-green-600 z-20'>
      <nav className='px-4 mx-auto lg:hidden'>
        <div className='flex justify-between items-center'>
          <div className='py-2'>
            <Link href='/'>
              <Image
                src='/images/emblema.png'
                alt='emblema'
                width={49}
                height={66}
              />
            </Link>
          </div>
          <div className='flex space-x-2 text-white '>
            <button
              className='h-min p-3 hover:bg-green-700 rounded-sm'
              onClick={() => onClickOfCanvasToggle()}
            >
              <GiHamburgerMenu className='text-2xl' />
            </button>
          </div>
        </div>
        <div
          className={`z-50 w-full h-screen bg-green-600 ${
            displayOfCanvas ? 'block' : 'hidden'
          }`}
        >
          <div className='pt-8 px-16 text-white flex flex-col space-y-4 divide-y divide-gray-400'>
            <div className='flex flex-col space-y-2 text-md'>
              {lowerBarItems.map((item, index) => (
                <button key={index} onClick={() => onClickOfCanvasToggle()}>
                  <Link href={item.url}>
                    <div className='w-min flex flex-col items-start hover:bg-white'>
                      <p className='uppercase bg-green-600 font-medium'>
                        {item.title}
                      </p>
                      <div className='w-min h-1 rounded-md'></div>
                    </div>
                  </Link>
                </button>
              ))}
            </div>
            <div className='flex flex-col items-start space-y-2 text-sm pt-2'>
              {upperBarItems.map((item, index) => (
                <button key={index} onClick={() => onClickOfCanvasToggle()}>
                  <Link href={item.url}>
                    <p className='uppercase'>{item.title}</p>
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <nav className='px-16 2xl:px-64 mx-auto hidden lg:block'>
        <div className='flex'>
          <span className='relative top-6'>
            <Link href='/'>
              <Image
                className='z-20'
                src='/images/emblema.png'
                alt='emblema'
                width={90}
                height={121}
              />
            </Link>
          </span>
          <div className='w-full flex flex-col divide-y pl-10'>
            <div className='flex space-x-6 justify-end font-semibold text-xs text-white py-4 items-center'>
              {upperBarItems.map((item, index) => (
                <button key={index}>
                  <Link href={item.url}>
                    <p className='uppercase font-bold'>{item.title}</p>
                  </Link>
                </button>
              ))}
            </div>
            <div className='h-full w-full flex justify-between items-center'>
              <div className='flex space-x-8 text-white'>
                {lowerBarItems.map((item, index) => (
                  <button
                    key={index}
                    className='uppercase font-2xl font-medium'
                  >
                    <Link href={item.url}>
                      <div className='flex flex-col hover:bg-white'>
                        <p className='bg-green-600'>{item.title}</p>
                        <div className='w-full h-1 rounded-md'></div>
                      </div>
                    </Link>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
