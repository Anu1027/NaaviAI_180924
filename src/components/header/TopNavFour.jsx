import React, { Fragment, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import navigate and location
import SearchModal from '../search-modal/SearchModal';
import MobileMenu from './MobileMenu';
import ThemeMainMenu from './ThemeMainMenu';
import Naavi from '../../assets/images/logo/logo_01.png';

const TopNavFour = () => {
  const [navbar, setNavbar] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();  // Initialize navigate
  const location = useLocation();  // Get current location
  
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const toggleMenu = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', toggleMenu);

  const handleSendMessage = () => {
    if (window.location.pathname === '/contact') {
        // If already on the contact page, scroll directly
        document.getElementById('contact-form-section').scrollIntoView({ behavior: 'smooth' });
    } else {
        // Navigate to contact page, then scroll after page load
        navigate('/contact');
        // Delay scrolling to the form until after navigation is complete
        setTimeout(() => {
            document.getElementById('contact-form-section').scrollIntoView({ behavior: 'smooth' });
        }, 500); // Slight delay for the page to load
    }
};
  

  return (
    <Fragment>
      <SearchModal isOpen={modalIsOpen} onClick={closeModal} bgColor="bg-three" />
      <header className={navbar ? "theme-main-menu sticky-menu theme-menu-four fixed" : "theme-main-menu sticky-menu theme-menu-four"}>
        <div className="inner-content">
          <div className="d-flex align-items-center">
            <div className="">
              <Link to="/" className="d-block"><img src={Naavi} alt="" width={150} /></Link>
            </div>
            <div className="right-widget d-flex align-items-center ms-auto order-lg-3">
              <Link to="#" className="send-msg-btn tran3s d-none d-lg-block" onClick={handleSendMessage}>Send Message</Link>
            </div>
            <nav className="navbar navbar-expand-lg order-lg-2">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ThemeMainMenu />
                <div className="mobile-content d-block d-lg-none">
                  <div className="d-flex flex-column align-items-center justify-content-center mt-70">
                    <a href="#contact-form-section" className="send-msg-btn tran3s mb-10">Send Message</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <MobileMenu />
        </div>
      </header>
    </Fragment>
  );
};

export default TopNavFour;
