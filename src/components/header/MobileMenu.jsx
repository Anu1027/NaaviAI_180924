import React, { Fragment, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ProSidebar,
    SidebarHeader,
    SidebarContent,
    Menu,
    MenuItem,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Naavi from '../../assets/images/logo/naavimobilelogo.jpg';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll

const MobileMenu = () => {
    const [click, setClick] = useState(false);
    const location = useLocation(); // Get the current location to handle active class

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <Fragment>
            <div className="mobile-menu-wrapper">
                <div className="moblie-menu-toggler">
                    <button
                        className={click ? "navbar-toggler active d-block d-lg-none" : "navbar-toggler d-block d-lg-none"}
                        type="button"
                        onClick={handleClick}
                    >
                        <span />
                    </button>
                </div>
                <ProSidebar className={click ? 'mobile-menu menu-open' : 'mobile-menu'}>
                    <SidebarHeader>
                        <div className="mobile-logo">
                            <Link to="/"><img src={Naavi} alt="" /></Link>
                        </div>
                        <div className="close-menu" onClick={handleClick}>
                            <i className="bi bi-x-lg"></i>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem className={location.pathname === '/' ? 'active' : ''} className="nav-link">
                                <Link to="/" onClick={handleClick}>Home</Link>
                            </MenuItem>
                            <MenuItem className={location.pathname.startsWith('/problem') ? 'active' : ''} className="nav-link">
                                <Link to="/problem" onClick={handleClick}>Problem</Link>
                            </MenuItem>
                            <MenuItem className={location.pathname.startsWith('/solution') ? 'active' : ''} className="nav-link">
                                <Link to="/solution" onClick={handleClick}>Solution</Link>
                            </MenuItem>
                            <MenuItem className="nav-link"> {/* Ensure uniformity in class */}
                                {/* Use ScrollLink for smooth scrolling to the partners section */}
                                <ScrollLink
                                    to="partners-section"  // ID of the partners section
                                    smooth={true}           // Enable smooth scrolling
                                    offset={-70}            // Adjust offset if necessary for the header height
                                    duration={500}          // Scroll duration in milliseconds
                                    onClick={handleClick}    // Close the mobile menu after clicking
                                >
                                    Partners
                                </ScrollLink>
                            </MenuItem>
                            <MenuItem className={location.pathname === '/contact' ? 'active' : ''} className="nav-link">
                                <Link to="/contact" onClick={handleClick}>Contact</Link>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </Fragment>
    );
};

export default MobileMenu;
