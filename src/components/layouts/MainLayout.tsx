import React, { ReactNode } from 'react';
import Navbar from '../navigation/Navbar';
import PageHeader from '../navigation/PageHeader';
import Footer from '../footer/Footer';
import Head from 'next/head';
import { SubPage } from '../navigation/PageHeader';

type MainLayoutProps = {
  title: string;
  description: string;
  subpages?: SubPage[];
  children?: ReactNode;
};

const Layout = ({
  title,
  description,
  subpages,
  children,
}: MainLayoutProps) => {
  return (
    <div className='bg-gray-200'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <PageHeader title={title} subpages={subpages} />
      {/* the base padding is px-16
      it got removed from the main because of the main page news component */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
