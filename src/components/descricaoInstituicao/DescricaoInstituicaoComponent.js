import React from 'react';

import { Typography } from '@material-ui/core';

import './DescricaoInstituicao.css';

const DescricaoInstituicaoComponent = props => {
  return (
    <Typography className="Descricao" variant="body1">
      {props.descricao}
    </Typography>
  );
};
export default DescricaoInstituicaoComponent;
