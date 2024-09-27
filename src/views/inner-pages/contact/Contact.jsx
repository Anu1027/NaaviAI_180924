import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import TopNavFour from '../../../components/header/TopNavFour';
import InnerBanner from '../../../components/page-title/InnerBanner';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import BannerFive from '../../../components/short-banner/BannerFive';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';
import ContactThree from '../../../components/contact/ContactThree';
import ContactForm from '../../../components/form/ContactForm';
import MapComponent from '../../../components/form/MapComponent'; // Adjusted import

const Contact = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Contact us || Naavi - Find The Path To Your Next Goal</title>
                </Helmet>

                <TopNavFour /> {/* theme-menu-four */}

                {/* Retain the "Get in Touch" heading, but hide the breadcrumb */}
                <div className="theme-inner-banner">
                    <div className="container">
                        <h2 className="intro-title text-center">Get in Touch</h2>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="contact-section-one mb-170 lg-mb-120">
                    <div className="container">
                        <ContactThree />
                    </div>
                    <div className="mt-100 lg-mt-70">
                        <div className="container">
                            <div className="row gx-xxl-5">
                                <div className="col-lg-6 d-flex order-lg-last">
                                    <div className="form-style-one">
                                        <h3 className="form-title pb-40 lg-pb-20">Send Message.</h3>
                                        <ContactForm />
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex order-lg-first">
                                    <div className="map-area-one mt-10 me-lg-4 md-mt-50">
                                        <MapComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Move breadcrumb section below the contact form */}
                <div className="contact-breadcrumb-wrapper">
                    <div className="container">
                    <ul className="contact-page-breadcrumb d-flex justify-content-center">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li className="current-page">Contact</li>
                    </ul>
                    </div>
                </div>

                {/* Short Banner */}
                {/* <div className="fancy-short-banner-five">
                    <div className="container">
                        <div className="bg-wrapper">
                            <BannerFive />
                        </div>
                    </div>
                </div> */}

                {/* Footer */}
                <div className="footer-style-four space-fix-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="subscribe-form">
                                            <NewsLetterForm />
                                            <p>We only send interesting and relevant emails.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FooterFour />
                            <div className="bottom-footer">
                                <CopyRightFour />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Contact;
