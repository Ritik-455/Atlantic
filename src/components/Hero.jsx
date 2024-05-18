import React from 'react'
import Navbar from './Navbar'
import Comnbtn from '../common/Commonbtn';

function Hero() {
    return (
        <>
            <div className=" bg-hero d-flex flex-column">
                <Navbar />
                <div className="container-2 d-flex flex-grow-1 align-items-end">
                    <div className="row pb-3">
                        <div className="col-12 col-sm-8">
                            <h2 className=' ff-poppins fw-bolder text-60 lh-md-72 text-white text-uppercase mb-0'>Optimising your
                                Vehicle <span className=' fst-italic fw-normal'>Performance</span> </h2>
                        </div>
                        <div className="col-12 col-sm-4 d-flex align-items-end justify-content-sm-end mt-3">
                            <Comnbtn text="explore" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero