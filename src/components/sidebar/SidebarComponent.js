import React, { Component } from 'react';
import {
  List,
  AppBar,
  Tabs,
  Tab,
  Drawer,
  Button,
  Typography,
  Divider
} from '@material-ui/core';

import Instituicao from '../instituicao/Instituicao';
import Roteiros from '../roteiros/RoteirosComponent';
import TabPanel from '../tabPanel/TabPanelComponent';
import MapHeader from '../mapHeader/mapHeaderComponent';
import SidebarHeader from '../sidebarHeader/SidebarHeaderComponent';

import './Sidebar.css';
import InstituicaoService from '../../services/InstituicaoService';
import RoteiroService from '../../services/RoteiroService';

class SidebarView extends Component {
  constructor(props) {
    super(props);
    this.instituicaoService = new InstituicaoService();
    this.roteiroService = new RoteiroService();

    this.state = {
      instituicoes: [],
      roteiros: [],
      value: 0,
      modalOpen: false,
      sidebarOpen: true,
      localizacao: {}
    };
  }

  async componentDidMount() {
    this.getLocalizacao();
    const listaInstituicoes = await this.instituicaoService.listaInstituicoes();
    const listaRoteiros = await this.roteiroService.listaRoteiros();
    this.setState({ instituicoes: listaInstituicoes, roteiros: listaRoteiros });
    this.ordernaInstituicoes();
  }

  ordernaInstituicoes() {
    this.state.instituicoes.forEach(this.calcularDistancia);

    this.state.instituicoes.sort(function(a, b) {
      if (a.distancia < b.distancia) {
        return -1;
      }
      if (b.distancia < a.distancia) {
        return 1;
      }
      return 0;
    });
  }

  calcularDistancia = instituicao => {
    const lat2 = instituicao.latitude;
    const lon2 = instituicao.longitude;
    const lat1 = this.state.localizacao.latitude;
    const lon1 = this.state.localizacao.longitude;

    const R = 6371; // km
    //has a problem with the .toRad() method below.
    const x1 = lat2 - lat1;
    const dLat = (x1 * Math.PI) / 180;
    const x2 = lon2 - lon1;
    const dLon = (x2 * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    instituicao.distancia = R * c;
  };

  getLocalizacao() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setLocalizacao);
    }
  }

  setLocalizacao = position => {
    const localizacao = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    this.setState({ localizacao: localizacao });
  };

  a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  };

  handleChange = (_, newValue) => {
    this.setState({ value: newValue });
  };

  toggleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };

  render() {
    if (this.state.instituicoes) {
      return (
        <div>
          <MapHeader open={this.toggleSidebar} />

          <Drawer open={this.state.sidebarOpen}>
            <AppBar elevation={0} position="static" color="inherit">
              <SidebarHeader />
              <Divider />

              <Tabs
                TabIndicatorProps={{
                  className: 'aba-selecionada'
                }}
                value={this.state.value}
                onChange={this.handleChange}
              >
                <Tab label="ESPAÇOS" {...this.a11yProps(0)} className="aba" />
                <Tab label="ROTEIROS" {...this.a11yProps(1)} className="aba" />
              </Tabs>
            </AppBar>
            <TabPanel value={this.state.value} index={0}>
              <List component="nav" aria-label="main mailbox folders">
                {this.state.instituicoes.map(instituicao => (
                  <Instituicao instituicao={instituicao} key={instituicao.id} />
                ))}
              </List>
              <Button onClick={this.toggleSidebar}>
                <Typography>Mapa</Typography>
              </Button>
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
              <List component="nav" aria-label="main mailbox folders">
                <Roteiros roteiros={this.state.roteiros} />
              </List>

              <Button onClick={this.toggleSidebar}>
                <Typography>Mapa</Typography>
              </Button>
            </TabPanel>
          </Drawer>
        </div>
      );
    } else {
      return <div>Carregando info...</div>;
    }
  }
}

export default SidebarView;
