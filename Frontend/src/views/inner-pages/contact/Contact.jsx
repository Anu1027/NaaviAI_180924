import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import TopNavFour from '../../../components/header/TopNavFour';
import InnerBanner from '../../../components/page-title/InnerBanner';
import NewsLetterForm from '../../../components/form/NewsLetterForm';
import FooterFour from '../../../components/footer/FooterFour';
import CopyRightFour from '../../../components/footer/CopyRightFour';
import ContactThree from '../../../components/contact/ContactThree';
import ContactForm from '../../../components/form/ContactForm';
import MapComponent from '../../../components/form/MapComponent';

const Contact = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if query parameter is present and scroll to contact form section
        const params = new URLSearchParams(location.search);
        if (params.get('scrollToForm') === 'true') {
            document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Helmet>
                    <title>Contact us || Naavi - Navigate Your Passion</title>
                </Helmet>

                <TopNavFour />

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
                                    <div className="form-style-one" id="contact-form-section">
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

                {/* Breadcrumb Section */}
                <div className="contact-breadcrumb-wrapper">
                    <div className="container">
                        <ul className="contact-page-breadcrumb d-flex justify-content-center">
                            <li><a href="/">Home</a></li>
                            <li className="current-page">Contact</li>
                        </ul>
                    </div>
                </div>

                {/* Footer with Newsletter Section */}
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
