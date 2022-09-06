import { NextPage } from 'next';

export type Role = 'ADMIN' | 'USER';

export type NextPageWithAuth = NextPage & { auth: Boolean };
