import React, { Fragment } from 'react';
import NvidiaLogo from '../../assets/images/logo/nvidia1.png'; // Import directly
import ThubLogo from '../../assets/images/logo/thub.png'; // Import directly
import DeptScienceLogo from '../../assets/images/logo/deptscience.png'; // Import directly
import MathLogo from '../../assets/images/logo/math.png'; // Import directly

const BrandLogo = [
    {
        img: NvidiaLogo, // Use imported image
        dataDelay: '',
    },
    {
        img: ThubLogo, // Use imported image
        dataDelay: '100',
    },
    {
        img: DeptScienceLogo, // Use imported image
        dataDelay: '200',
    },
    {
        img: MathLogo, // Use imported image
        dataDelay: '300',
    }
];

const BrandTwo = () => {
    return (
        <Fragment>
            <div id="partners-section">
            <h2 className="partners-heading">Partners</h2> {/* Added heading */}
                <ul className="style-none text-center mt-40 lg-mt-10">
                    {BrandLogo.map((item, i) => (
                        <li
                            key={i}
                            className="partner-logo-block-one d-inline-block"
                            data-aos="fade-up"
                            data-aos-delay={item.dataDelay}>
                            <a href="#" className="d-flex align-items-center justify-content-center">
                                <img
                                    src={item.img}  // Directly reference imported image
                                    alt={`Logo ${i + 1}`}
                                    className="brand-logo-img"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default BrandTwo;
