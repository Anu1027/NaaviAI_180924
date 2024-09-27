import React from 'react';
import { Link } from 'react-router-dom';
import SD from '../assets/images/assets/SD1.png'; // Adjust the path as necessary

// Import Navbar and other necessary components
import TopNavFour from '../components/header/TopNavFour';
import BannerOne from '../components/short-banner/BannerOne'; // Ensure the path is correct
import FooterFour from '../components/footer/FooterFour';
import CopyRightFour from '../components/footer/CopyRightFour';
import NewsLetterForm from '../components/form/NewsLetterForm'; // Import the newsletter form

const NotFound = () => {
  return (
    <div className="main-page-wrapper">
      {/* Navbar */}
      <TopNavFour />

      {/* Main Content */}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row my-5">
            <h2>Decision Delusion Problem</h2>
            <div className="col-md-6 my-4">
              <div className="custom-card">
                <p>
                  Due to the lack of Personalised education pathways, students
                  often choose generic study options.
                </p>
              </div>
              <div className="custom-card">
                <p>
                  Many students, who do not fit standard educational prospects,
                  fall through the cracks.
                </p>
              </div>
              <div className="custom-card">
                <p>
                  This situation leads to disengagement, low motivation, and
                  mismatched careers.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img className="SD-image" src={SD} alt="Decision Delusion" />
            </div>
          </div>

          {/* Link to go back to the homepage */}
          <ul className="page-breadcrumb style-none d-flex ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current-page">Problem</li>
          </ul>
        </div>
      </div>

      {/* <div className="fancy-short-banner-five position-relative bottom-transform">
                    <div className="container">
                        <div className="bg-wrapper">
                            <BannerOne/>
                        </div>
                        /.bg-wrapper
                    </div>
                    /.container
                </div>
                /.fancy-short-banner-one */}

                <div className="footer-style-four space-fix-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
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
  );
};

export default NotFound;
