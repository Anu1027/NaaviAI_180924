import React, { Fragment } from 'react';
import ModalVideos from '../ModalVideo/ModalVideos';
import bannerimage from '../../assets/images/assets/naavi_banner4.png'

const HeroBannerFive = () => {
    return (
        <Fragment>
            <ModalVideos isOpen={false} onClick={() => {}} />
            <div className="hero-banner-five">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-md-7">
                            <h1 className="hero-heading">Find Your Education<span> Pathway</span></h1>
                            <p className="text-lg mb-100 pe-xl-5 -mt-6 md-pt-0 md-mb-40 md-mt-0">Naavi is your partner in finding the perfect education path, designed for your unique career goals.</p>
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
                    <img
  src={bannerimage}
  alt="banner"
  style={{
    width: '1350px',
    height: '100%',
    marginLeft:'-760px',
    marginTop:'-220px',
  }}
/>
                </div>
                <div className="shapes oval-one" />
            </div>
        </Fragment>
    );
};

export default HeroBannerFive;
