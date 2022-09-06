import Footer from './footer';
import Meta from './meta';
import * as React from 'react';
import ResponsiveAppBar from './nav-bar';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <ResponsiveAppBar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
