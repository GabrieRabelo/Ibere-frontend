import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

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
              <ListItem button alignItems="flex-start" key={instituicao.id}>
                 <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="http://iberecamargo.org.br/wp-content/uploads/2018/07/Fachada-foto-Gustavo-Possamai.jpg" />
        </ListItemAvatar>
                <ListItemText
                  primary={instituicao.nome}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className="AS"
                        color="textPrimary"
                      >
                        {instituicao.descricao}
                      </Typography>
                      {` ${instituicao.telefone} | Aberto agora: ${ instituicao.aberto ? "Sim" : "Não"} `}
                    </React.Fragment>
                  }
                />

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
