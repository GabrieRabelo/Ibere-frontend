import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

class CarouselComponent extends React.Component {
  images = this.props.instituicao.imagens.map(i => {
    return <img className="imagem" src={i} key={i} alt={''} />;
  });

  responsive = {
    0: {
      items: 1
    },

    350: {
      items: 1.1
    },

    414: {
      items: 1.3
    }
  };

  render() {
    return (
      <AliceCarousel
        buttonsDisabled={true}
        items={this.images}
        autoHeight={true}
        infinite={true}
        responsive={this.responsive}
      />
    );
  }
}

export default CarouselComponent;
