import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';

import './RedesSociaisComponent.css';

class RedesSociaisComponent extends Component {
  render() {
    return (
      <Grid container className="container-social-media">
        <Grid className="titulo-social-media">
          <Typography variant="body2" className="social-media">
            <b>Redes sociais:</b>
          </Typography>
        </Grid>

        {this.props.redes.map(r => {
          return (
            <Grid container className="rede" key={r.id}>
              <Grid>
                <Typography variant="body2">{`- ${r.redeSocial}`}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default RedesSociaisComponent;
