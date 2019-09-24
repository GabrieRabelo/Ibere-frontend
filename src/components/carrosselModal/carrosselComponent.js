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

class CarouselComponent extends React.Component {
  render() {
    return (
      <Carousel
        responsive={responsive}
        draggable={true}
        arrows={false}
        focusOnSelect={true}
        infinite={true}
        showDots={true}
      >
        {this.props.instituicao.imagens.map(imagem => (
          <div className="slide" key={imagem}>
            <img src={imagem} alt="" />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default CarouselComponent;
