import React from 'react';
import { Navbar, Features } from '@components';

const Landing: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1>Landing</h1>
      <Features />
      <Footer />
    </>
  );
};

export { Landing }