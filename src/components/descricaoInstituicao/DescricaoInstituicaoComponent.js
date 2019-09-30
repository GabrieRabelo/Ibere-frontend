import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import './DescricaoInstituicao.css';

const DescricaoInstituicaoComponent = props => {
  return (
    <Grid container className="descricaoContainer">
      <Typography className="descricao" variant="body1">
        {props.descricao}
      </Typography>
    </Grid>
  );
};
export default DescricaoInstituicaoComponent;
