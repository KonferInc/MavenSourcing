import React from 'react';
import { Navbar, Features, Footer, Hero } from '@components';

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </>
    );
};

export { Landing };