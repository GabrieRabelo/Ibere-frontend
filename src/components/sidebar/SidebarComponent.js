import React, { Component } from 'react';
import { List, AppBar, Tabs, Tab, Drawer, Button, Typography } from '@material-ui/core';

import Instituicao from '../instituicao';
import TabPanel from '../tabPanel/TabPanelComponent';

class SidebarView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instituicoes: [],
      value: 0,
      modalOpen: false
    };

    this.getInstituicoes();
  }

  getInstituicoes = () => {
    fetch(
      'https://my-json-server.typicode.com/joaocv3/sample_endpoint_ibere/instituicoes'
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          instituicoes: data
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

  render() {
    if (this.state.instituicoes) {
      return (
        <Drawer open={this.props.state}>
          <AppBar position="static">
            <Tabs value={this.state.value} onChange={this.handleChange}>
              <Tab label="ESPAÇOS" {...this.a11yProps(0)} style={{width:'50%'}}/>
              <Tab label="ROTEIROS" {...this.a11yProps(1)} style={{width:'50%'}}/>
            </Tabs>
          </AppBar>
          <TabPanel value={this.state.value} index={0}>
            <List component="nav" aria-label="main mailbox folders">
              {this.state.instituicoes.map(instituicao => (
                <Instituicao
                  instituicao={instituicao}
                  key={instituicao.id}
                  handleOpen={() => {
                    this.handleOpen();
                  }}
                />
              ))}
            </List>
          </TabPanel>
          <TabPanel value={this.state.value} index={1}>
            ROTEIROS AINDA NAO IMPLEMENTADO
          </TabPanel>
          <Button onClick={this.props.open}>
              <Typography>
                Mapa
              </Typography>
          </Button>
        </Drawer>
      );
    } else {
      return <div>Carregando info...</div>;
    }
  }
}

export default SidebarView;
