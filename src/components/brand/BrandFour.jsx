import React, {Fragment} from 'react';

const BrandLogo = [
    {
        img: 'Plogo-1',
        dataDelay: '',
    },
    {
        img: 'Plogo-12',
        dataDelay: '100',
    },
    {
        img: 'Plogo-9',
        dataDelay: '200',
    },
    {
        img: 'Plogo-7',
        dataDelay: '300',
    },
    {
        img: 'Plogo-8',
        dataDelay: '400',
    }
]

const BrandFour = () => {
    return (
        <Fragment>
            <ul className="style-none text-center mt-40 lg-mt-20">
                {BrandLogo.map((item, i) => (
                    <li
                        key={i}
                        className="partner-logo-block-one d-inline-block"
                        data-aos="fade-up"
                        data-aos-delay={item.dataDelay}>
                        <a href="#" className="d-flex align-items-center justify-content-center"><img src={`images/logo/${item.img}.jpeg`} alt=""/></a>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default BrandFour
