import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

const ServiceContent = [
    {
        icon: "icon_32",
        title: 'Large Language Models',
        desc: `Utilizing LLMs to transform complex data into clear, actionable insights. We craft personalized learning paths that align with your academic goals.`,
        arrow: 'icon_20',
        datadelay: '',
        dataAos: 'fade-right',
        className: ''
    }, {
        icon: "icon_31",
        title: 'Knowledge Graphs',
        desc: `Crafting intelligent pathways with Knowledge Graphs that connect your educational dots. Our maps guide you toward your academic goals.`,
        arrow: 'icon_20',
        datadelay: '100',
        dataAos: 'fade-up',
        className: 'active'
    }, {
        icon: "icon_33",
        title: 'Combining KGs with LLMs',
        desc: `Convert data noise intelligent insights for competitive differentiation qulaity check equlity.`,
        arrow: 'icon_20',
        dataDelay: '',
        dataAos: 'fade-left',
        className: ''
    }
]
const FancyFeatureSeventeen = () => {
    return ( 
    <Fragment> 
      <div className="row justify-content-center pt-30">
          {ServiceContent.map((val, i) => (
              <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                  <div
                      className={`block-style-twelve block-space mt-30 ${val.className}`}>
                      <div className="icon d-flex align-items-end"><img src={`images/icon/${val.icon}.svg`} alt=""/></div>
                      <h5>
                          <Link to="/service-details">{val.title}</Link>
                      </h5>
                      <p>{val.desc}</p>
                      <Link to="/service-details" className="tran3s more-btn"><img src="images/icon/icon_20.svg" alt=""/></Link>
                  </div>
                  {/* /.block-style-twelve */}
              </div>
          ))}

      </div> 
    </Fragment>
  )
}

export default FancyFeatureSeventeen