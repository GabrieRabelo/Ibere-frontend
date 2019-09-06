import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Map from '../../components/map/MapComponent';
import SidebarHeader from '../../components/sidebarHeader/SidebarHeaderComponent'

class Home extends Component {
  render() {
    return (
      <Grid>
        <Grid item xs={12}>
          <Map />
        </Grid>
      </Grid>
      
    );
  }
}

export default Home;
