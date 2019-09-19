import React, { Component } from 'react';
import {
  ListItem,
  Divider,
  List,
  ListItemText,
  Collapse
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import './roteiros.css';
import InstituicaoRoteiro from '../instituicaoRoteiro/InstituicaoRoteiro';

export class Roteiros extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = e => {
    this.setState({ [e]: !this.state[e] });
  };

  render() {
    const { roteiros } = this.props;

    return (
      <List>
        {roteiros.map(roteiro => {
          return (
            <React.Fragment key={roteiro.id}>
              {roteiro != null ? (
                <React.Fragment>
                  <ListItem
                    button
                    onClick={this.handleClick.bind(this, roteiro.nome)}
                  >
                    <ListItemText primary={roteiro.nome} />
                    {this.state[roteiro.nome] ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    component="li"
                    in={this.state[roteiro.nome]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List disablePadding>
                      <Divider />
                      {roteiro.instituicoes.map(instituicao => {
                        return (
                          <InstituicaoRoteiro
                            instituicao={instituicao}
                            key={instituicao.id}
                          />
                        );
                      })}
                    </List>
                  </Collapse>
                </React.Fragment>
              ) : (
                <ListItem onClick={this.handleClick.bind(this, roteiro.nome)}>
                  <ListItemText primary={roteiro.name} />
                </ListItem>
              )}
            </React.Fragment>
          );
        })}
        <Divider />
      </List>
    );
  }
}

export default Roteiros;
