import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CarouselComponent = () => {
  return (
    <Carousel
      responsive={responsive}
      draggable={true}
      arrows={false}
      focusOnSelect={true}
      infinite={true}
      showDots={true}
    >
      <div className="slide">
        <p>1A</p>
        <p>Imagem</p>
        <p>Irá</p>
        <p>Aqui</p>
        <p>Testando altura</p>
      </div>
      <div className="slide">
        <p>2A</p>
        <p>Imagem</p>
        <p>Irá</p>
        <p>Aqui</p>
        <p>Testando altura</p>
      </div>
      <div className="slide">
        <p>3A</p>
        <p>Imagem</p>
        <p>Irá</p>
        <p>Aqui</p>
        <p>Testando altura</p>
      </div>
      <div className="slide">
        <p>4A</p>
        <p>Imagem</p>
        <p>Irá</p>
        <p>Aqui</p>
        <p>Testando altura</p>
      </div>
      <div className="slide">
        <p>5A</p>
        <p>Imagem</p>
        <p>Irá</p>
        <p>Aqui</p>
        <p>Testando altura</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
