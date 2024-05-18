import React from 'react'
import { Card } from '../common/Helper'
import Comnbtn from '../common/Commonbtn'

function Blog() {
    return (
        <>
            <div className="container-2 pb-blog pt-3 pt-md-5 pt-lg-0">
                <h3 className=' ff-poppins fw-bolder  text-52 lh-62 text-white mb-0 text-uppercase text-center'>explore our  <span className=' fw-normal fst-italic bg-text-red h-69'> Blogs</span></h3>
                <div className="row mt-blog">
                    {Card.map((data, index) => (
                        <>
                            <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0 d-flex justify-content-center" data-aos="flip-left">
                                <div className="car-card position-relative">
                                    <img src={data.img} alt="car-img" className=' w-100' />
                                    <p className=' ff-dm fw-medium text-18 lh-23 text-white mt-3 mb-0'>{data.para}</p>
                                    <Comnbtn text="Read More" spacing=" mt-27" />
                                    <div className="date-box d-flex justify-content-center position-absolute date-box-pos">
                                        <p className=' ff-dm fw-normal text-14 lh-21 mb-0 text-white'>10-March-2024</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog