import { Modal } from './Modal';
import React, { useState } from 'react'

export const PropertyImage = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShowAllImages = () => {
    setIsModalOpen(true);
  }
 
  
  return (
    <>
      <div className="property-img-container">
        {/* Creating the first image  */}
        <div className="img-item first-image">
          <img src={images[0].url} alt="property-1" className='images' />
        </div>
        {/* remaining 4 images */}

        {images.slice(1, 5).map((images, index) => (
          <div key={index} className='img-item'>
            <img
              className='images'
              src={images.url}
              alt={`property-${index + 2}`}
            />
          </div>
        ))}
      </div>
      <div className="similar-photos-container">
        <button className='similar-photos' onClick={handleShowAllImages}>
          <span className='material-symbols-outlined'>photo_library</span>
        </button>
      </div>
      { isModalOpen && <Modal images={images} setIsModalOpen={setIsModalOpen}/>}

    </>
  )
}
