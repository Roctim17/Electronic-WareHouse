import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner mt-1'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    {/* <div className="carousel-item active">
                        <img src="image/image4.jpg" className="d-block w-100" alt="..." />
                    </div> */}
                    <div className="carousel-item active">
                        <img src="image/image5.jpg" className="d-block w-100" alt="..." />
                    </div>
                    {/* <div className="carousel-item">
                        <img src="image/image6.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/image1.jpg" className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="image/image7.jpg" className="d-block w-100" alt="..." />
                    </div> */}
                </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}

        </div>

    );
};

export default Banner;