import React, { Component } from 'react';

import {Grid, Typography}  from '@material-ui/core';

import SidebarView from '../../components/sidebar/SidebarComponent';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from '../currentLocation';
import InstituicaoService from '../../services/InstituicaoService';

import './MapComponent.css'
import { green, red } from '@material-ui/core/colors';
import { typography } from '@material-ui/system';
import color from '@material-ui/core/colors/blueGrey';


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
  
  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
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
          <Marker onClick={this.onMarkerClick} name={'Localização Atual'} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>

          {this.state.defaultMarks.map((store, index) => (
            <Marker onClick={this.onMarkerClick} name={store.nome} endereco={store.endereco} aberto={store.aberto} key={index} id={index} position={{
              lat: store.latitude,
              lng: store.longitude
            }} />             
          ))}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <h5>{this.state.selectedPlace.endereco}</h5>
              {this.state.selectedPlace.aberto ? (
               <h6 style={{color: 'green'}}>Aberto</h6>
              ) : (
               <h6 style={{color: 'red'}}>Fechado</h6> 
              )}
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
