import React from 'react';
import { Navbar, Features, Footer } from '@components';

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />
            <Features />
            <Footer />
        </>
    );
};

export { Landing };