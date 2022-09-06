import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username (jonas)' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password (123)',
        },
      },
      async authorize(credentials, _req) {
        if (credentials?.username !== 'jonas' || credentials?.password !== '123') return null;
        else
          return {
            username: credentials?.username,
            email: credentials?.username + '@emele.com',
          };
      },
    }),
  ],
  theme: {
    colorScheme: 'light',
  },
  debug: true,
};

export default NextAuth(authOptions);
