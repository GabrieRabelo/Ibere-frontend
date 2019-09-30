import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import SidebarView from '../../components/sidebar/SidebarComponent';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


import CurrentLocation from '../currentLocation';

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
  };

  }


  onMarkerClick = (props, marker, e) =>
  this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
      this.setState({
          showingInfoWindow: false,
          activeMarker: null
      });
  }
};


  render() {
    return (
      <Grid>
            <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                <Marker onClick={this.onMarkerClick} name={'current location'} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </CurrentLocation>
        <SidebarView />
      </Grid>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDvHSPp_Ov4xxoCtR7Rd1299bQ8hQYSWRI'
})(MapView);

