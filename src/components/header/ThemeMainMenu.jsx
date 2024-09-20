import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Naavi from '../../assets/images/logo/logo_01.png'

const AboutMenu = [
    {
        name: 'About Us One',
        routerPath: '/about-one'
    },
    {
        name: 'About Us Two',
        routerPath: '/about-two'
    }
];

const ServiceMenu = [
    {
        name: 'Service One',
        routerPath: '/service-one'
    },
    {
        name: 'Service Two',
        routerPath: '/service-two'
    },
    {
        name: 'Service Details',
        routerPath: '/service-details'
    }
];

const TeamMenu = [
    {
        name: 'Team Member',
        routerPath: '/team-member'
    },
    {
        name: 'Team Details',
        routerPath: '/team-details'
    }
];

const BlogMenu = [
    {
        name: 'Grid Layout',
        routerPath: '/blog-grid'
    },
    {
        name: 'Grid With Sidebar',
        routerPath: '/blog-sidebar'
    },
    {
        name: 'Blog Masonry',
        routerPath: '/blog-masonry'
    },
    {
        name: 'Blog Standard',
        routerPath: '/blog-standard'
    },
    {
        name: 'Blog Details',
        routerPath: '/blog-details'
    }
];

const Miscellaneous = [
    {
        name: 'Testimonials',
        routerPath: '/testimonial'
    },
    {
        name: 'Our Pricing',
        routerPath: '/price'
    },
    {
        name: 'FAQ',
        routerPath: '/faq'
    },
    {
        name: '404 Error',
        routerPath: '/error'
    }
];

const ThemeMainMenu = () => {
    const location = useLocation(); // Get the current location to handle active class

    return (
        <Fragment>
            <ul className="navbar-nav">
                <li className="d-block d-lg-none">
                    <div className="logo">
                        <Link to="/"><img src={Naavi} alt="" width={130} /></Link>
                    </div>
                </li>
                <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className={`nav-item ${location.pathname.startsWith('/pages') ? 'active' : ''}`}>
                    <Link className="nav-link" to="/Problem">Problem</Link>
                </li>
                <li className={`nav-item ${location.pathname.startsWith('/portfolio') ? 'active' : ''}`}>
                    <Link className="nav-link" to="/Solution">Solution</Link>
                </li>
                <li className={`nav-item ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>
                    <Link className="nav-link" to="/Partners">Partners</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact" role="button">Contact</Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default ThemeMainMenu;
