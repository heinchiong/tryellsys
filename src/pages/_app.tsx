/**
 * import react packages
 */
import * as React from 'react';

/**
 * import next packages
 */
import type { AppProps } from 'next/app';

/**
 * import packages
 */
import { NextIntlProvider } from 'next-intl';

/**
 * import project files
 */
import '@/styles/globals.css';
import { PageProps } from '@components/layouts/types';

type Props = AppProps & {
  Component: PageProps,
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? (page => page);
  const Layout = Component.layout ?? React.Fragment;

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        {getLayout(<Component {...pageProps} />)}
      </Layout>
    </NextIntlProvider>
  );
};

export default MyApp;