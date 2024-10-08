import React from 'react';
import { Navbar, Features, Footer, Contact } from '@components';

const Landing: React.FC = () => {
    return (
        <>
            <Navbar />
            <Features />
            <Contact />
            <Footer />
        </>
    );
};

export { Landing };