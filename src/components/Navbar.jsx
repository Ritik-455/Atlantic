import React from 'react'
import logo from '../assets/images/SVG/Logo.svg'
import { useState } from 'react';
import Comnbtn from '../common/Commonbtn';
import arrow from '../assets/images/SVG/arrow.svg'

function Navbar() {
    const [show, setfirst] = useState(false);

    if (show === true) {
        document.body.classList.add('overflow_hidden')
    }
    else {
        document.body.classList.remove('overflow_hidden')
    }

    return (
        <>
            <div className="nav_box d-flex align-items-center">
                <nav className=' d-flex justify-content-between w-100 align-items-center'>
                    <div className="  d-flex gap-55 align-items-center">
                        <img src={logo} alt="logo" className='cursor-pointer' />
                        <ul className={`${show ? "end-0" : "right_100"} d-flex gap-28 mobile-view`}>
                            <li><a href="#About" className=' ff-dm fw-normal text-16 lh-24 text-white op-80 nav_link' onClick={() => {
                                setfirst(!show);
                            }}>About Us</a></li>
                            <li className=' position-relative d-inline-block dropdown'><a href="#Categories" className=' ff-dm fw-normal text-16 lh-24 text-white op-80 nav_link' onClick={() => {
                                setfirst(!show);
                            }}>Categories <span> <img src={arrow} alt="arrow" /></span></a>
                                <div class="dropdown-content">
                                    <a href="#f" className='ff-dm fw-normal text-16 lh-24 text-white'>Fuel</a>
                                    <a href="#f" className='ff-dm fw-normal text-16 lh-24 text-white'>Mobil Oil</a>
                                </div>
                            </li>
                            <li><a href="#Services" className=' ff-dm fw-normal text-16 lh-24 text-white op-80 nav_link' onClick={() => {
                                setfirst(!show);
                            }}>Services</a></li>
                            <li><a href="#Testimonials" className=' ff-dm fw-normal text-16 lh-24 text-white op-80 nav_link' onClick={() => {
                                setfirst(!show);
                            }}>Testimonials</a></li>
                            <li><a href="#Blogs" className=' ff-dm fw-normal text-16 lh-24 text-white op-80 nav_link' onClick={() => {
                                setfirst(!show);
                            }}>Blogs</a></li>
                        </ul>
                    </div>
                    <div className="gap-3 d-none d-md-flex">
                        <div className="search-box">
                            <label className="d-flex align-items-center gap-12" htmlFor='ss'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.3833 12.877C7.76953 12.877 9.04785 12.4287 10.0938 11.6816L14.0283 15.6162C14.2109 15.7988 14.4517 15.8901 14.709 15.8901C15.2485 15.8901 15.6304 15.4751 15.6304 14.9438C15.6304 14.6948 15.5474 14.4541 15.3647 14.2798L11.4551 10.3618C12.2769 9.28271 12.7666 7.94629 12.7666 6.49365C12.7666 2.98242 9.89453 0.110352 6.3833 0.110352C2.88037 0.110352 0 2.97412 0 6.49365C0 10.0049 2.87207 12.877 6.3833 12.877ZM6.3833 11.499C3.64404 11.499 1.37793 9.23291 1.37793 6.49365C1.37793 3.75439 3.64404 1.48828 6.3833 1.48828C9.12256 1.48828 11.3887 3.75439 11.3887 6.49365C11.3887 9.23291 9.12256 11.499 6.3833 11.499Z" fill="white" fill-opacity="0.6" />
                                </svg>
                                <input type="search" id='ss' className='input-search ff-dm fw-normal text-17 lh-22 color-grey' placeholder="Search" />
                            </label>
                        </div>
                        <Comnbtn text="Get in touch" />
                    </div>
                    <div className="menu z-5 d-xl-none" onClick={() => {
                        setfirst(!show);
                    }}>
                        <span></span>
                        <span className='my-2'></span>
                        <span></span>
                    </div>
                </nav>
            </div >
        </>
    )
}

export default Navbar