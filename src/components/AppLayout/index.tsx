import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { Inter } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

interface IAppLayout {
  children: React.ReactNode;
}
const AppLayout: FC<IAppLayout> = ({ children }) => {
  return (
    <>
      <div className={`${inter.className} relative`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
