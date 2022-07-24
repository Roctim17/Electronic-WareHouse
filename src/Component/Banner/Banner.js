import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner mt-1'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <img src="image/image4.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="image/image5.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/image6.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/image1.jpg" className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="image/image7.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Banner;