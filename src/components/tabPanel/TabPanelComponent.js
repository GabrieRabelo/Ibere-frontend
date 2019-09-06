import React, { Component } from 'react';
import { Typography, Box, Modal, Paper } from '@material-ui/core';

import DetalheInstituicaoContainer from '../../containers/DetalheInstituicaoContainer';

export class TabPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instituicoes: [],
      value: null,
      index: null,
      children: null,
      modalOpen: false
    };
  }

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  modal = () => {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Paper>
          <DetalheInstituicaoContainer
            titulo={'Fundação Ibere Camargo'}
            endereco={'Avenida Padre Cacique, 1720'}
          />
        </Paper>
      </Modal>
    );
  };

  render() {
    const { value, index, children } = this.props;
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {this.modal()}
        <Box onClick={this.handleOpen} p={3}>
          {children}
        </Box>
      </Typography>
    );
  }
}

export default TabPanel;
