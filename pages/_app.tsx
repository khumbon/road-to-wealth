import { AppProps } from 'next/app';
import '../styles/index.css';
import * as React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Road to Wealth</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
