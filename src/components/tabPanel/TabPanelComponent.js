import React, { Component } from 'react';
import { Typography, Box, Modal, Paper } from '@material-ui/core';

import DetalheInstituicaoContainer from '../../containers/DetalheInstituicaoContainer';
import './TabPanel.css';
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
        open={this.state.modalOpen}
        onClose={this.handleClose}
        className="modal-instituicao"
      >
        <div className="conteudo-modal-instituicao">
          <DetalheInstituicaoContainer
            titulo={'Fundação Ibere Camargo'}
            endereco={'Avenida Padre Cacique, 1720'}
          />
        </div>
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
