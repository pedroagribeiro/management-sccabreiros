import '../../styles/globals.css';
import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import { AppType } from 'next/dist/shared/lib/utils';
import { AppRouter } from '../server/routers';
import { SessionProvider, useSession } from 'next-auth/react';
import { NextPageWithLayout } from 'types/pages';

// Fonts
import '@fontsource/saira/300.css';
import '@fontsource/saira/400.css';
import '@fontsource/saira/500.css';
import '@fontsource/saira/600.css';
import '@fontsource/saira/700.css';
import '@fontsource/teko/400.css';
import '@fontsource/teko/600.css';
import '@fontsource/teko/700.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  const layout = getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>,
  );

  type AuthComponent = typeof Component & { auth: boolean };
  const ComponentWithAuth = Component as AuthComponent;

  return (
    <SessionProvider session={session}>
      {ComponentWithAuth.auth ? (
        <Auth>
          <div>{layout}</div>
        </Auth>
      ) : (
        <div>{layout}</div>
      )}
    </SessionProvider>
  );
};

function Auth({ children }: { children: JSX.Element }) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_URL) return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
