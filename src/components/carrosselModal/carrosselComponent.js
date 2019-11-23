import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import './carrosselComponent.css';
import 'react-alice-carousel/lib/alice-carousel.css';

class CarouselComponent extends React.Component {
  loadImages = () => {
    return this.props.imagens.map(img => {
      return <img className="imagem" src={img.url} key={img.id} alt={''} />;
    });
  };

  responsive = {
    0: { items: 1.2 },
    415: { items: 1.4 },
    500: { items: 1.5 },
    600: { items: 1.7 },
    700: { items: 1.9 },
    800: { items: 2.1 },
    900: { items: 2.3 }
  };

  render() {
    return (
      <AliceCarousel buttonsDisabled dotsDisabled responsive={this.responsive}>
        {this.loadImages()}
      </AliceCarousel>
    );
  }
}
export default CarouselComponent;
