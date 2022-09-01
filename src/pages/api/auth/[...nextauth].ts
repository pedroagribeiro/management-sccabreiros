import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { trpc } from '../../../utils/trpc';

export default NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        // const {
        //   data: result,
        //   refetch,
        //   isLoading,
        // } = trpc.useQuery([
        //   'session.validate-session',
        //   { username: credentials!.username, password: credentials!.password },
        // ]);

        // if (result?.validation && result.username) {
        //   return result;
        // }
        alert('tentei');
        if (credentials!.username === 'abc') {
          return {
            user: {
              name: 'ABC',
            },
          };
        }

        return null;
      },
    }),
  ],
});
