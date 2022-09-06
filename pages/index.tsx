import type { NextPageWithLayout } from './_app';
import Head from 'next/head';
import Image from 'next/image';
import MainLayout from '../components/layouts/MainLayout';
import { ReactElement } from 'react';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <p className='text-2xl'>Landing page</p>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => (
  <MainLayout title='Início' description='' subpages={[]}>
    {page}
  </MainLayout>
);

export default Home;
