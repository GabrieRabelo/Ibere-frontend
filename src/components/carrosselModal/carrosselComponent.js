import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 80 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 80 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 80 // this is needed to tell the amount of px that should be visible.
  }
};

class CarouselComponent extends React.Component {
  render() {
    return (
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={false}
        focusOnSelect={true}
        infinite={true}
        showDots={true}
        partialVisbile={true}
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
