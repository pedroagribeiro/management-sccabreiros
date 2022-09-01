import React, { useState } from 'react';
import { TiTicket } from 'react-icons/ti';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa';
import { GiLoveLetter } from 'react-icons/gi';
import { AiFillPhone } from 'react-icons/ai';
import { MdMarkEmailRead, MdPhoto } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { trpc } from '../../utils/trpc';

type MembershipSubmissionProps = {
  id: number;
  fullName: string;
  birthdate: Date;
  address: string;
  postalCode: string;
  location: string;
  phone: string;
  photo: string;
  email: string;
  handled: boolean;
};

const MembershipSubmission = ({
  id,
  fullName,
  birthdate,
  address,
  postalCode,
  location,
  phone,
  photo,
  email,
  handled,
}: MembershipSubmissionProps) => {
  const [isHandled, setIsHandled] = useState(handled);
  const markHandledMutation = trpc.useMutation(['contact.set-read-true']);
  const unmarkHandledMutation = trpc.useMutation(['contact.set-read-false']);

  const markAsHandled = () => {
    markHandledMutation.mutate({ id });
    setIsHandled(true);
    console.log(isHandled);
  };

  const unmarkHandled = () => {
    unmarkHandledMutation.mutate({ id });
    setIsHandled(false);
    console.log(isHandled);
  };

  return (
    <div className='flex flex-col space-y-2 rounded-sm bg-gray-100 p-6'>
      <span className='flex space-x-2 items-center'>
        <TiTicket className='text-lg text-gray-700' />
        <span className='flex space-x-1 items-end'>
          <p className='uppercase text-sm font-medium'>Identificador - </p>
          <p className='text-sm'>{id}</p>
        </span>
      </span>
      <span className='flex space-x-2 items-center'>
        <BsFillPersonFill className='text-lg text-gray-700' />
        <span className='flex space-x-1 items-end'>
          <p className='uppercase text-sm font-medium'>Nome - </p>
          <p className='text-sm'>{fullName}</p>
        </span>
      </span>
      <span className='flex space-x-2 items-center'>
        <FaAddressCard className='text-lg text-gray-700' />
        <span className='flex space-x-1 items-end'>
          <p className='uppercase text-sm font-medium'>Morada - </p>
          <p className='text-sm'>
            {address} - {location}
          </p>
        </span>
      </span>
      <span className='flex space-x-2 items-center'>
        <GiLoveLetter className='text-lg text-gray-700' />
        <span className='flex space-x-1 items-end'>
          <p className='uppercase text-sm font-medium'>Código-Postal - </p>
          <p className='text-sm'>{postalCode}</p>
        </span>
      </span>
      <span className='flex space-x-2 items-center'>
        <AiFillPhone className='text-lg text-gray-700' />
        <span className='flex space-x-1 items-end'>
          <p className='uppercase text-sm font-medium'>
            Contacto telefónico -{' '}
          </p>
          <p className='text-sm'>{phone}</p>
        </span>
      </span>
      <span className='flex space-x-2 items-center'>
        <MdMarkEmailRead className='text-lg text-gray-700' />
        <span className='flex space-x-1 items-end'>
          <p className='uppercase text-sm font-medium'>Email - </p>
          <p className='text-sm'>{email}</p>
        </span>
      </span>
      <div className='flex space-x-4 w-full justify-center pt-2 '>
        <button className='flex space-x-2 items-center bg-gray-700 p-2 text-white rounded-sm'>
          <MdPhoto className='text-md' />
          <a href={photo} target='_blank' rel='noreferrer'>
            Fotografia
          </a>
        </button>
        <button
          onClick={() => (isHandled ? unmarkHandled() : markAsHandled())}
          className='flex space-x-2 items-center bg-green-600 p-2 text-white rounded-sm'
        >
          <AiFillCheckCircle className='text-md' />
          <p>Marcar como tratada</p>
        </button>
      </div>
    </div>
  );
};

export default MembershipSubmission;
