import React, { useState } from 'react';
import backArrow from '../assets/arrow_back.svg'
import forwardArrow from '../assets/arrow_forward.svg'
import '../styles/carousel.scss'

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const notSingleImage = images.length > 1; //vérifie s'il n'y a qu'une seule image

console.log(notSingleImage)
  return (
    <div className="carousel">
      
      <img className = 'carousel__image' src={images[currentSlide]} alt={`slide-${currentSlide}`} />

      {notSingleImage && (
        <div className='carousel__number'>{`${currentSlide +1}/${images.length}`}</div>
      )}
      
      {notSingleImage && (
      <div className='carousel__arrows'>
        <img className='carousel__arrow' src={backArrow} alt = '' onClick={prevSlide} />
        <img className='carousel__arrow' src = {forwardArrow} alt = '' onClick={nextSlide} /> 
      </div>
      )}
      
    </div>
  );
};


export default Carousel;
