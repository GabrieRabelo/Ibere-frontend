import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Sidebar from '../../components/sidebar';
import Map from '../../components/map';

class Home extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>

        <Grid item xs={9}>
          <Map />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
