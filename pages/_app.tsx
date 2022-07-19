import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/react';

import { Layout } from '@components';

import '@styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
