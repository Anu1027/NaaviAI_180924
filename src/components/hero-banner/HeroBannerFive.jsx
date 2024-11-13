import React, { Fragment } from 'react';
import ModalVideos from '../ModalVideo/ModalVideos';

const HeroBannerFive = () => {
    return (
        <Fragment>
            <ModalVideos isOpen={false} onClick={() => {}} />
            <div className="hero-banner-five">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-md-7">
                            <h1 className="hero-heading">Find Your Education<span> Pathway</span></h1>
                            <p className="text-lg mb-50 pt-40 pe-xl-5 md-pt-30 md-mb-40">Naavi is your partner in finding the perfect education path, designed for your unique career goals.</p>
                            <ul className="style-none button-group d-flex align-items-center">
                                {/* Button to open the chatbot in a new tab */}
                                <li className="me-4">
                                <a href="https://generate.naavinetwork.ai" target="_blank" rel="noopener noreferrer" className="ripple-btn btn-one">
                                    Generate
                                </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="illustration-holder">
                    <img src="images/assets/ils_13.svg" alt="" className="main-illustration ms-auto " />
                    <img src="images/assets/ils_13_1.svg" alt="" className="shapes shape-one" />
                    <img src="images/assets/ils_13_2.svg" alt="" className="shapes shape-two" data-aos="fade-down" />
                    <img src="images/assets/ils_13_2.svg" alt="" className="shapes shape-three" data-aos="fade-down" />
                </div>
                <div className="shapes oval-one" />
            </div>
        </Fragment>
    );
};

export default HeroBannerFive;
