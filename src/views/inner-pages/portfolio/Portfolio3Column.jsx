import React, { Fragment } from 'react'; 
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import TopNavFour from '../../../components/header/TopNavFour';
import PortfolioGalleryFive from '../../../components/portfolio/PortfolioGalleryFive';
import BannerOne from '../../../components/short-banner/BannerOne';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';
import NewsLetterForm from '../../../components/form/NewsLetterForm';

// Import the image from the correct path
import SolutionImage from '../../../assets/images/assets/solution.png';

const Portfolio3Column = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Solution || Naavi - Find The Path To Your Next Goal</title>
                </Helmet>
                {/* helmet end */}

                <TopNavFour />
                {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <div className="container">
                        <h2 className="intro-title">
                            LLMs-Synergised with Knowledge Graphs (KGs)
                        </h2>
                        
                        {/* Flex container for text and image */}
                        <div className="d-flex align-items-center mt-4">
                            {/* Text Content */}
                            <div className="text-content" style={{ flex: '1' }}>
                                <p>
                                    AI-based approach to education counseling, which is personalised, where school students provide information in levels:
                                </p>
                                <ul>
                                    <li> Basic information (location, type of school)</li>
                                    <li> Academic performances (grades, interests, aspirations)</li>
                                    <li> Psychometric analysis & Extracurricular activities</li>
                                </ul>
                                <p>
                                They are provided with interactive pathways, including macro and micro steps. Each decision unlocks new levels, progressively clarifying and defining their journey.
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="image-container" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                                <img src={SolutionImage} alt="Solution" className="img-fluid" style={{ maxWidth: '100%', height: 'auto', alignSelf: 'center' }} />
                            </div>
                        </div>
                        {/* End of side-by-side layout */}

                        {/* Breadcrumbs placed after the new content */}
                        <ul className="page-breadcrumb style-none d-flex" style={{ justifyContent: 'center' }}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="current-page">Solution</li>
                        </ul>
                    </div>
                </div>
                {/* /.theme-inner-banner */}

                <div className="fancy-short-banner-five position-relative bottom-transform">
                    <div className="container">
                        <div className="bg-wrapper">
                            <BannerOne />
                        </div>
                        {/* /.bg-wrapper */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-short-banner-one */}

                <div className="footer-style-four space-fix-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">
                                                Join Our <span>Newsletter</span> &amp; Get updated.
                                            </h4>
                                        </div>
                                        {/* /.title-style-four */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="subscribe-form">
                                            <NewsLetterForm />
                                            <p>We only send interesting and relevant emails.</p>
                                        </div>
                                        {/* /.subscribe-form */}
                                    </div>
                                </div>
                            </div>
                            {/* /.subscribe-area */}
                            <FooterFour />
                            <div className="bottom-footer">
                                <CopyRightFour />
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                </div>
                {/* /.footer-style-four */}
            </div>
        </Fragment>
    );
};

export default Portfolio3Column;
