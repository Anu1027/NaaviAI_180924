import React, { Fragment } from 'react';

const BrandLogo = [
    {
        img: 'nvidia',  // NVIDIA is in JPEG format
        extension: 'jpeg',  // Specify the correct extension
        dataDelay: '',
    },
    {
        img: 't-hub',  // T-Hub is in PNG format
        extension: 'png',  // Specify the correct extension
        dataDelay: '100',
    }
];

const BrandTwo = () => {
    return (
        <Fragment>
            <ul className="style-none text-center mt-40 lg-mt-10">
                {BrandLogo.map((item, i) => (
                    <li
                        key={i}
                        className="partner-logo-block-one d-inline-block"
                        data-aos="fade-up"
                        data-aos-delay={item.dataDelay}>
                        <a href="#" className="d-flex align-items-center justify-content-center">
                            {/* Render only one image based on the correct extension */}
                            <img
                                src={`images/logo/${item.img}.${item.extension}`}  // Correctly use the extension from the array
                                alt={`${item.img} logo`}  // Provide a descriptive alt tag
                                className="brand-logo-img"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default BrandTwo;
