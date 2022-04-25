import React from 'react';
import { Layout } from '../components';
import '../styles/globals.scss'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>React CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
