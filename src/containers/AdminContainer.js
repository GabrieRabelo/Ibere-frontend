import React, { Component } from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { InstituicaoList } from '../admin/instituicoes/list';
import { InstituicaoCreate } from '../admin/instituicoes/create';

const dataProvider = jsonServerProvider(
  'https://my-json-server.typicode.com/joaocv3/sample_ibere_endpoint_v1'
);

export class TelaLogin extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="instituicoes"
          list={InstituicaoList}
          edit={EditGuesser}
          create={InstituicaoCreate}
        />
      </Admin>
    );
  }
}

export default TelaLogin;
