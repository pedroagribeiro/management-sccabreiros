import React from 'react';
import { ImYoutube, ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col divide-y divide-white shadow-md'>
      <div className='flex flex-col'>
        <div className='w-full h-1 bg-green-600'></div>
        <div className='flex flex-col divide-y divide-white'>
          <div className='flex flex-col space-y-6 lg:space-y-0 lg:flex-row font-sm items-center lg:justify-between bg-gray-700 text-white py-2 px-6 text-sm pt-4'>
            <div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4'>
              <Link href='/contact'>Contacte-nos</Link>
            </div>
            <div className='flex space-x-4'>
              <p>@ Sporting Clube de Cabreiros - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
