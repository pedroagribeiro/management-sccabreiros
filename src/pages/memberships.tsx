import React, { ReactElement } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import MembershipSubmission from '../components/memberships/MembershipSubmission';
import { trpc } from '../utils/trpc';
import { NextPageWithAuthAndLayout } from 'types/pages';
import { useSession } from 'next-auth/react';

const Membership: NextPageWithAuthAndLayout = () => {
  const { data: submissions, refetch, isLoading } = trpc.useQuery(['membership.get-all-submissions']);
  const { data: userData } = useSession();

  return submissions ? (
    <div className='flex flex-col space-y-8 relative px-4 pb-8 mx-auto mt-8 max-w-2xl sm:px-6 sm:mt-12 lg:px-8 lg:pb-10 lg:max-w-7xl text-gray-700'>
      <div className='flex flex-col space-y-6'>
        <div className='flex flex-col'>
          <h2 className='text-4xl text-gray-700 font-teko uppercase pb-0 font-normal'>Por tratar</h2>
          <div className='h-1 w-10 bg-red-600'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 gap-y-4'>
          {submissions!.submissions.map((submission) => (
            <MembershipSubmission key={submission.id} {...submission} />
          ))}
        </div>
      </div>
      <div className='flex flex-col space-y-6'>
        <div className='flex flex-col'>
          <h2 className='text-4xl text-gray-700 font-teko uppercase pb-0 font-normal'>Tratados</h2>
          <div className='h-1 w-10 bg-green-600'></div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading</p>
  );
};

Membership.getLayout = (page: ReactElement) => (
  <MainLayout title='Formulários de sócios' description=''>
    {page}
  </MainLayout>
);

Membership.auth = true;

export default Membership;
