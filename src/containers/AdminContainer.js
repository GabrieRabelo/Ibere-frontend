import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { InstituicaoList } from '../admin/instituicoes/list'

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/joaocv3/sample_ibere_endpoint_v1');

export class TelaLogin extends Component {

  render() {
    return (
        <Admin dataProvider={dataProvider} >
            <Resource name="instituicoes" list={InstituicaoList} />
        </Admin>
    );
  }
}

export default TelaLogin;
