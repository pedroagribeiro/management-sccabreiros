import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type Role = 'ADMIN' | 'USER';

export type NextPageWithAuthAndLayout = NextPageWithLayout & { auth: Boolean };
