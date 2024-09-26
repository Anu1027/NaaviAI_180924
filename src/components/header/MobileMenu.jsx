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
                            <MenuItem className={location.pathname === '/' ? 'active' : ''}>
                                <Link to="/" onClick={handleClick}>Home</Link>
                            </MenuItem>
                            <MenuItem className={location.pathname.startsWith('/Problem') ? 'active' : ''}>
                                <Link to="/problem" onClick={handleClick}>Problem</Link>
                            </MenuItem>
                            <MenuItem className={location.pathname.startsWith('/Solution') ? 'active' : ''}>
                                <Link to="/solution" onClick={handleClick}>Solution</Link>
                            </MenuItem>
                            {/* <MenuItem className={location.pathname.startsWith('/Partners') ? 'active' : ''}>
                                <Link to="" onClick={handleClick}>Partners</Link>
                            </MenuItem> */}
                            <MenuItem className={location.pathname === '/Contact' ? 'active' : ''}>
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
