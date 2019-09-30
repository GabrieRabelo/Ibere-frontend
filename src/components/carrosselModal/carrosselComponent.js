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
  mobile2: {
    breakpoint: { max: 420, min: 376 },
    items: 1,
    partialVisibilityGutter: 120 // this is needed to tell the amount of px that should be visible.
  },
  mobile3: {
    breakpoint: { max: 375, min: 361 },
    items: 1,
    partialVisibilityGutter: 90 // this is needed to tell the amount of px that should be visible.
  },
  mobile4: {
    breakpoint: { max: 360, min: 321 },
    items: 1,
    partialVisibilityGutter: 70 // this is needed to tell the amount of px that should be visible.
  },
  mobile5: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
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
            <img className="img" src={imagem} alt="" height="150px" />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default CarouselComponent;
