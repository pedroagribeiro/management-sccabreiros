import '../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next/types';
import type { AppProps } from 'next/app';

// Fonts
import '@fontsource/saira/300.css';
import '@fontsource/saira/400.css';
import '@fontsource/saira/500.css';
import '@fontsource/saira/600.css';
import '@fontsource/saira/700.css';
import '@fontsource/teko/400.css';
import '@fontsource/teko/600.css';
import '@fontsource/teko/700.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  const layout = getLayout(<Component {...pageProps} />);
  return <div>{layout}</div>;
}

export default MyApp;
