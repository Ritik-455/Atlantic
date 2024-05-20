import React from 'react'
import Wlogo from '../assets/images/SVG/w.svg'
import mini from '../assets/images/SVG/mini-cooper.svg'
import cat from '../assets/images/SVG/cat.svg'
import mer from '../assets/images/PNG/mer.png'

function About() {
    return (
        <>
            <section className="bg-about position-relative" id="Categories">
                <div className="container-2 d-flex justify-content-center">
                    <div className="icon-box position-relative">
                        <div className=" d-none d-lg-block">
                            <div className="icon-circle d-flex justify-content-center align-items-center position-absolute pos-icon-1">
                                <div className=""><img src={Wlogo} alt="Wlogo" data-aos="zoom-in" /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center position-absolute pos-icon-2">
                                <div className=""><img src={Wlogo} alt="Wlogo" data-aos="zoom-in" /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center position-absolute pos-icon-3">
                                <div className=""><img src={mini} alt="mini" data-aos="zoom-in" /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center position-absolute pos-icon-4">
                                <div className=""><img src={cat} alt="cat"  data-aos="zoom-in"/></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center position-absolute pos-icon-5">
                                <div className=""><img src={mer} alt="mer" data-aos="zoom-in" className='mer-icon-size' /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center position-absolute pos-icon-6">
                                <div className=""><img src={mini} alt="mini " data-aos="zoom-in" className='mer-icon-size' /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center position-absolute pos-icon-7">
                                <div className=""><img src={Wlogo} alt="Wlogo" data-aos="zoom-in" /></div>
                            </div>
                        </div>
                        <div className=" d-flex gap-4 justify-content-center mt-logo flex-wrap">
                            <div className="icon-circle d-flex justify-content-center align-items-center d-lg-none">
                                <div className=""><img src={Wlogo} alt="Wlogo" /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center d-lg-none">
                                <div className=""><img src={Wlogo} alt="Wlogo" /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center d-lg-none">
                                <div className=""><img src={mini} alt="mini" /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center d-lg-none">
                                <div className=""><img src={cat} alt="cat" /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center d-lg-none">
                                <div className=""><img src={mer} alt="mer" className='mer-icon-size' /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center d-lg-none">
                                <div className=""><img src={mini} alt="mini " className='mer-icon-size' /></div>
                            </div>
                            <div className="icon-circle d-flex justify-content-center align-items-center d-lg-none">
                                <div className=""><img src={Wlogo} alt="Wlogo" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-2 pt-about pb-5" id="About">
                    <div className="d-flex justify-content-center">
                        <h3 className=' ff-poppins fw-bolder  text-52 lh-md-62 text-white mb-0 text-uppercase max-w-578 text-center'>Our <span className=' fw-normal fst-italic bg-text-red'> numbers </span>
                             say about us</h3>
                    </div>
                    <div className="d-flex justify-content-between mt-75 flex-wrap">
                        <div className="max-w-204">
                            <h4 className=' ff-poppins fw-bolder text-80 lh-md-96 text-white mb-0 text-hover'>20K+</h4>
                            <p className=' ff-dm fw-medium text-16 lh-24 text-white mb-0 text-center'>Happy Customers</p>
                        </div>
                        <div className="max-w-174">
                            <h4 className=' ff-poppins fw-bolder text-80 lh-md-96 text-white mb-0 text-hover'>35%</h4>
                            <p className=' ff-dm fw-medium text-16 lh-24 text-white mb-0 text-center'>Export Volume</p>
                        </div>
                        <div className="max-w-171 mt-24 mt-sm-0">
                            <h4 className=' ff-poppins fw-bolder text-80 lh-md-96 text-white mb-0 text-hover'>20%</h4>
                            <p className=' ff-dm fw-medium text-16 lh-24 text-white mb-0 text-center'>Market Share</p>
                        </div>
                        <div className="max-w-151 mt-24 mt-sm-0">
                        <h4 className=' ff-poppins fw-bolder text-80 lh-md-96 text-white mb-0 text-hover'>65+</h4>
                            <p className=' ff-dm fw-medium text-16 lh-24 text-white mb-0 text-center'>Country</p>  
                        </div>
                    </div>
                </div>
                <div className="red-ellips position-absolute ellips-pos d-none d-xxl-block"></div>
            </section>
        </>
    )
}

export default About