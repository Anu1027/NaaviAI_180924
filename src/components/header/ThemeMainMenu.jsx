import React, { Fragment } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import Naavi from '../../assets/images/logo/logo_01.png';

const ThemeMainMenu = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Use useNavigate for programmatic navigation

    const handlePartnersClick = () => {
        // Navigate to the homepage
        navigate('/'); // Use navigate instead of history.push
        
        // Delay scrolling to allow the page to load
        setTimeout(() => {
            const partnersSection = document.getElementById('partners-section');
            if (partnersSection) {
                partnersSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adjust timeout as necessary
    };

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
                    <Link className="nav-link" to="/problem">Problem</Link>
                </li>
                <li className={`nav-item ${location.pathname.startsWith('/portfolio') ? 'active' : ''}`}>
                    <Link className="nav-link" to="/solution">Solution</Link>
                </li>
                {/* Updated Partners Link */}
                <li className="nav-item">
                    <button onClick={handlePartnersClick} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        Partners
                    </button>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact" role="button">Contact</Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default ThemeMainMenu;