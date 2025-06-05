import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchModal from '../search-modal/SearchModal';
import MobileMenu from './MobileMenu';
import ThemeMainMenu from './ThemeMainMenu';
import Naavi from '../../assets/images/logo/naavi_final_logo2.png';
import SideTogglePanel from './SideToggler';
import './topnav.scss'

const TopNavFour = () => {
  const [navbar, setNavbar] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const toggleMenu = () => setNavbar(window.scrollY >= 68);
    window.addEventListener('scroll', toggleMenu);
    return () => window.removeEventListener('scroll', toggleMenu);
  }, []);

  useEffect(() => {
  const handleResize = () => {
    const mobile = window.innerWidth < 1025;
    setIsMobile(mobile);
    if (!mobile) setMobileMenuOpen(false); // close if switching to desktop
  };

  handleResize(); // run once at mount
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  // Sidebar handlers (desktop only)
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  // Modal handlers
  const closeModal = () => setIsOpen(false);

  // Mobile menu handlers
  const handleMobileMenuOpen = () => setMobileMenuOpen(true);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  // Contact page scroll or navigation
  const handleSendMessage = () => {
    if (location.pathname === '/contact') {
      document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact?scrollToForm=true');
    }
  };

  return (
    <Fragment>
      <SearchModal isOpen={modalIsOpen} onClick={closeModal} bgColor="bg-three" />
      <SideTogglePanel isOpen={isSidebarOpen} onClose={closeSidebar} />

      <header className={`theme-main-menu sticky-menu theme-menu-four ${navbar ? 'fixed' : ''}`}>
  <div className="inner-content">
    {/* Desktop View */}
    {!isMobile && (
      <div className="d-flex align-items-center justify-content-between w-100">
        {/* Logo */}
        <Link to="/" className="d-block">
          <img src={Naavi} alt="Logo" width={150} />
        </Link>

        {/* Nav Menu */}
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ThemeMainMenu />
          </div>
        </nav>

        {/* Sidebar button */}
        <button className="menu-icon-btn" onClick={openSidebar}>
          <span className="menu-icon-custom">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </span>
        </button>
      </div>
    )}

    {/* Mobile View */}
    
{isMobile && (
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Logo */}
          <Link to="/" className="d-block">
            <img src={Naavi} alt="Logo" width={140} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button className="menu-icon-btn" onClick={handleMobileMenuOpen}>
            <span className="menu-icon-custom">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </button>
        </div>
      )}

      {/* Conditionally Render Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
  <MobileMenu isOpen={true} onClose={handleMobileMenuClose} />
)}

  </div>
</header>

    </Fragment>
  );
};

export default TopNavFour;
