import '../styles/globals.css';
import type { FC, ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next/types';
import type { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';

// Fonts
import '@fontsource/saira/300.css';
import '@fontsource/saira/400.css';
import '@fontsource/saira/500.css';
import '@fontsource/saira/600.css';
import '@fontsource/saira/700.css';
import '@fontsource/teko/400.css';
import '@fontsource/teko/600.css';
import '@fontsource/teko/700.css';
import React from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  const layout = getLayout(<Component {...pageProps} />);

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
}

function Auth({ children }: { children: JSX.Element }) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;
