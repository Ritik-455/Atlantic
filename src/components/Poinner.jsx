import React from 'react'
import ylwlayer from '../assets/images/PNG/ylw-lubricants.png'
import Comnbtn from '../common/Commonbtn';


function Poinner() {
    return (
        <>
            <div className="mt-neg-3 " id="Services">
                <div className="container-2 pt-poinner">
                    <div className="d-flex justify-content-end">
                        <h3 className=' ff-poppins fw-bolder  text-52 lh-md-62 text-white mb-0 text-uppercase'>Pioneers of <span className=' fw-normal fst-italic red-blog'> Lubricants </span>
                            <span className="d-lg-block">& Grease Manufacturing</span></h3>
                    </div>
                </div>
                <div className="container-full mt-45 pb-poinner position-relative">
                    <div className="d-flex justify-content-end">
                        <div className="bg_layer d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                            <div className="">
                                <p className=' ff-dm fw-normal text-24 lh-sm-36 mb-0 max-w-556'>Atlantic Grease & Lubricants is one of the leading manufacturers in the <span className=' fw-bold'> automotive industry</span> providing high-performance products certified by renowned European and American automobile industries.</p>
                                <Comnbtn text="read our story" spacing=" mt-45" />
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute ylw-pos ">
                        <img src={ylwlayer} alt="ylwlayer" className='img-width w-100  d-none d-lg-block' data-aos="fade-down" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poinner