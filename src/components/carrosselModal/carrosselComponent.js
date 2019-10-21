import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import './carrosselComponent.css';
import 'react-alice-carousel/lib/alice-carousel.css';

class CarouselComponent extends React.Component {
  images = this.props.instituicao.imagens.map(img => {
    return <img className="imagem" src={img} key={img} alt={''} />;
  });

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
      <AliceCarousel
        items={this.images}
        buttonsDisabled
        dotsDisabled
        responsive={this.responsive}
      />
    );
  }
}

export default CarouselComponent;
