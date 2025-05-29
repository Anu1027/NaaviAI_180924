import React, { Fragment } from 'react';
import ModalVideos from '../ModalVideo/ModalVideos';
import bannerimage from '../../assets/images/assets/naavi_banner4.png';
import './homebanner.scss';

const HeroBannerFive = () => {
    return (
        <Fragment>
            <ModalVideos isOpen={false} onClick={() => {}} />
            <div className="hero-banner-five">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-md-7">

                            {/* Badges Section */}
                            <div className="hero-badge-container">
        <span className="hero-badge routes">PATHS</span>
        <span className="hero-badge essentials">ESSENTIALS</span>
        <span className="hero-badge pro">PRO</span>
        <span className="hero-badge enterprise">ENTERPRISE</span>
    </div>

                            <div className="home">
  Explore customized efficient <span className="green-text">Pathways</span> and <span className="amber-text">Steps</span> for You
</div>

                            <p className="text-lg mb-100 pe-xl-5 -mt-6 md-pt-0 md-mb-40 md-mt-0">
                                Navigate towards your dream educational, skill and career destinations globally
                            </p>
                            <ul className="style-none button-group d-flex align-items-center">
                                <li className="me-4">
                                    <a
                                        href="https://generate.naavinetwork.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ripple-btn btn-one"
                                    >
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
                            marginLeft: '-760px',
                            marginTop: '-220px',
                        }}
                    />
                </div>
                <div className="shapes oval-one" />
            </div>
        </Fragment>
    );
};

export default HeroBannerFive;
