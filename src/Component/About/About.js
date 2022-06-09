import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about p-3'>
            <h1 className=''>ABOUT</h1>
            <div className="row p-3">
                <div className="col-md-6 col-sm-12 img p-5">
                    <img src="image/image5.jpg" alt="" />
                </div>
                <div className="col-md-6 col-sm-12 text pt-5">
                    <h1 className=''>Electronic WareHouse</h1>
                    <h5>Here you store your electronic product. And you can control your quantity with this site. And this site is protected.</h5>
                </div>
            </div>

        </div>
    );
};

export default About;