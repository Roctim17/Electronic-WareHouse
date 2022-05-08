import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DisplayProduct from '../DisplayProduct/DisplayProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DisplayProduct></DisplayProduct>
            <Contact></Contact>
        </div>
    );
};

export default Home;