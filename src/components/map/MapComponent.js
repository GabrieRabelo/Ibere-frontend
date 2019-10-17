import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import SidebarView from '../../components/sidebar/SidebarComponent';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from '../currentLocation';
import InstituicaoService from '../../services/InstituicaoService';


class MapView extends Component {
  constructor(props) {
    super(props);
    this.instituicaoService = new InstituicaoService();

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      defaultMarks: []
    };
  }

  async componentDidMount() {
    const listaInstituicoes = await this.instituicaoService.listaInstituicoes();
    this.setState({ defaultMarks: listaInstituicoes });
    console.log(this.state.defaultMarks)
  }

  displayMarkers = () => {
    return this.state.defaultMarks.map((store, index) => {
      return <Marker key={index} id={index} name={store.nome} position={{
          lat: store.latitude,
          lng: store.longitude
        }} />
        
    })
  }



  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = () => {
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
          {this.displayMarkers()}
        </CurrentLocation>
        <SidebarView />
      </Grid>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDvHSPp_Ov4xxoCtR7Rd1299bQ8hQYSWRI'
})(MapView);
