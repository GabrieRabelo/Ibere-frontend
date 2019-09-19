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

class SidebarView extends Component {
  constructor(props) {
    super(props);
    this.instituicaoService = new InstituicaoService();

    this.state = {
      instituicoes: [],
      roteiros: [],
      value: 1,
      modalOpen: false,
      sidebarOpen: true
    };

    this.getRoteiros();
  }

  async componentDidMount() {
    const listaInstituicoes = await this.instituicaoService.listaInstituicoes();
    this.setState({ instituicoes: listaInstituicoes });
  }

  getRoteiros = () => {
    fetch(
      'https://my-json-server.typicode.com/joaocv3/sample_ibere_endpoint_v1/roteiros'
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          roteiros: data
        });
      });
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
            <AppBar position="static" color="default">
              <SidebarHeader />
              <Divider />

              <Tabs value={this.state.value} onChange={this.handleChange}>
                <Tab
                  label="ESPAÇOS"
                  {...this.a11yProps(0)}
                  style={{ width: '50%' }}
                />
                <Tab
                  label="ROTEIROS"
                  {...this.a11yProps(1)}
                  style={{ width: '50%' }}
                />
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
