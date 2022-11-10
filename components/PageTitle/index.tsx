import React from 'react';
import Head from 'next/head';

export const PageTitle = ({ title }: {title: string}) => {
  return (
    <Head>
      <title> {title} </title>
      <meta> {title} </meta>}
    </Head>
  );
};
