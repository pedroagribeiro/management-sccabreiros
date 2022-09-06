import type { NextPageWithLayout } from './_app';
import MainLayout from '../components/layouts/MainLayout';
import { ReactElement } from 'react';
import { Formik, Form, Field, validateYupSchema } from 'formik';
import { signIn } from 'next-auth/react';

type LoginFormContentType = {
  username: string;
  password: string;
};

const Home: NextPageWithLayout = () => {
  const initialValues: LoginFormContentType = {
    username: '',
    password: '',
  };

  const handleAuth = async (values: LoginFormContentType) => {
    signIn('credentials', {
      ...values,
      redirect: false,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className='h-full flex justify-center items-center mt-16 mb-16 text-gray-700 py-auto'>
      <div className='flex w-11/12 md:w-9/12 lg:w-6/12 flex-col space-y-0 items-center'>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values: LoginFormContentType, actions) => {
            handleAuth(values);
          }}
        >
          <Form
            className='w-5/12 flex flex-col items-center space-y-4 bg-white ring-1 ring-gray-200 rounded-sm shadow-md px-8 pt-6 pb-8 mb-4'
            action='/send-data-here'
            method='post'
          >
            <div className='w-full flex flex-col space-y-2'>
              <label
                htmlFor='username'
                className='block text-gray-700 text-lg font-semibold'
              >
                Username
              </label>
              <Field
                className='shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                name='username'
                type='text'
                placeholder='Username'
                required
              />
            </div>
            <div className='w-full flex flex-col space-y-2'>
              <label
                htmlFor='password'
                className='block text-gray-700 text-lg font-semibold'
              >
                Password
              </label>
              <Field
                className='shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                name='password'
                type='password'
                placeholder='Password'
                required
              />
            </div>
            <div>
              <button
                type='submit'
                className='mt-8 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700'
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
        <button onClick={() => signIn()}>Login</button>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => (
  <MainLayout title='Autenticação' description=''>
    {page}
  </MainLayout>
);

export default Home;
