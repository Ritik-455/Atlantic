import React from "react";

function Comnbtn(props) {
    return (
        <button className={` ${props.spacing} cmn-btn ff-chivo fw-900 text-uppercase text-16 lh-24 text-white   `}>
            {props.text}
        </button>
    )
}
export default Comnbtn