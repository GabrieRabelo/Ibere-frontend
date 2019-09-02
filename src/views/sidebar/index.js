import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import sidebar from '../../api/sidebar';

class SidebarView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instituicoes: []
    };
  }

  getInstituicoes = async () => {
    const res = await sidebar.get('instituicoes', {
      params: {
        latitude: 0,
        longitude: 0
      }
    });

    this.setState({
      instituicoes: res.instituicoes
    });
  };

  render() {
    return (
      <div className="some-class">
        <List component="nav" aria-label="main mailbox folders">
          {this.state.instituicoes.map(instituicao => (
            <ListItem button key={instituicao.id}>
              <ListItemText primary={instituicao.nome} />
            </ListItem>
          ))}
        </List>
        <button onClick={this.getInstituicoes}>teste</button>
      </div>
    );
  }
}

export default SidebarView;
