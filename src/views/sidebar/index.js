import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class SidebarView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instituicoes: []
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

  render() {
    if (this.state.instituicoes) {
      return (
        <div className="some-class">
          <List component="nav" aria-label="main mailbox folders">
            {this.state.instituicoes.map(instituicao => (
              <ListItem button key={instituicao.id}>
                <ListItemText primary={instituicao.nome} />
                <ListItemText primary={instituicao.endereco} />
                <ListItemText primary={instituicao.aberto ? 'Sim' : 'Não'} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    } else {
      return <div>Carregando info...</div>;
    }
  }
}

export default SidebarView;
