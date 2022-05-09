import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DisplayProduct from '../DisplayProduct/DisplayProduct';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DisplayProduct></DisplayProduct>
            <About></About>
            <Contact></Contact>

        </div>
    );
};

export default Home;