import React from 'react'
import bluelayer from '../assets/images/PNG/blue-ellips.png'

function Approvals() {
    return (
        <>
            <div className="container-2" id="Testimonials">
                <h3 className=' ff-poppins fw-bolder  text-52 lh-62 text-white mb-0 text-uppercase'> OEM <span className=' fw-normal fst-italic bg-text-blue'> Approvals</span></h3>
            </div>
            <div className="container-full position-relative pb-64">
                <div className="bg-approvel d-flex align-items-center mt-52 justify-content-center justify-content-lg-start px-2 px-sm-0">
                    <div className=" pl-approvel">
                        <p className=' ff-dm fw-normal text-24 lh-sm-36 mb-0 max-w-556'>At Atlantic Grease and Lubricants, we have <span className=' fw-bold'> secured approvals</span>  leading automobile manufacturers. Thus, we demonstrate our commitment to delivering the best possible outcomes to our customers.</p>
                        <p className=' ff-dm fw-normal text-24 lh-sm-36 mb-0 max-w-556 mt-3'>Recognising the <span className=' fw-bold'> significance of quality</span>  to our valued customers, we uphold the utmost standards of excellence in all our endeavors.</p>
                    </div>
                </div>
                <div className="position-absolute blue-pos blue-img-width">
                    <img src={bluelayer} alt="bluelayer" className=' d-none d-lg-block' data-aos="fade-down"/>
                </div>
            </div>
        </>
    )
}

export default Approvals