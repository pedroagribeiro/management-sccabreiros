import React, { useState } from 'react';
import { TiTicket } from 'react-icons/ti';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdMarkEmailRead, MdSubject } from 'react-icons/md';
import { AiFillCheckCircle, AiFillMessage } from 'react-icons/ai';
import { trpc } from '../../utils/trpc';

type ContactSubmissionProps = {
  id: number;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
};

const ContactSubmission = ({
  id,
  fullName,
  email,
  subject,
  message,
  read,
}: ContactSubmissionProps) => {
  const [isHandled, setIsHandled] = useState(read);
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
        <MdMarkEmailRead className='text-lg text-gray-700' />
        <span className='flex space-x-1 items-end'>
          <p className='uppercase text-sm font-medium'>Email - </p>
          <p className='text-sm'>{email}</p>
        </span>
      </span>
      <span className='flex space-x-2 items-center'>
        <MdSubject className='text-lg text-gray-700' />
        <span className='flex space-x-1 items-end'>
          <p className='uppercase text-sm font-medium'>Assunto - </p>
          <p className='text-sm'>{subject}</p>
        </span>
      </span>
      <span className='flex space-x-2 items-center'>
        <AiFillMessage className='text-lg text-gray-700' />
        <span className='flex space-x-1 items-end'>
          <p className='uppercase text-sm font-medium'>Mensagem - </p>
          <p className='text-sm'>{message}</p>
        </span>
      </span>
      <div className='flex space-x-4 w-full justify-center pt-2 '>
        <button
          onClick={() => (isHandled ? unmarkHandled() : markAsHandled())}
          className='flex space-x-2 items-center bg-green-600 p-2 text-white rounded-sm'
        >
          <AiFillCheckCircle className='text-md' />
          <p>Marcar como lida</p>
        </button>
      </div>
    </div>
  );
};

export default ContactSubmission;
