import React, { useEffect } from 'react'
import PropTypes from "prop-types";

import "../../CSS/Modal.css";
export const Modal = ({images,setIsModalOpen}) => {

    useEffect(()=>{
        document.body.style.overflow = "hidden";
        return ()=>
        {
            document.body.style.overflow = "visible";
        }
    },[])
  return (
    <div className="modal-backdrop">
        <div className="modal-content">
            <button className='close-button' onClick={()=>setIsModalOpen(false)}>
                <span>&times;</span>
            </button>
            <div className="modal-image-container">
            { images.map( (image, index) => (
            <img key={index} src={image.url} alt={`Property-view ${index + 1}`} />
          ))}
            </div>
        </div>
    </div>
  )
}
Modal.propTypes = {
    images : PropTypes.array.isRequired,
    setIsModalOpen : PropTypes.func.isRequired
};