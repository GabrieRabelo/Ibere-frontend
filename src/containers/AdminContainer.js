import React, { Component } from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { InstituicaoList } from '../admin/instituicoes/list';
import { InstituicaoCreate } from '../admin/instituicoes/create';

const dataProvider = jsonServerProvider(
  'http://localhost:3001/api/v1'
);

export class TelaLogin extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="instituicao"
          list={InstituicaoList}
          edit={EditGuesser}
          create={InstituicaoCreate}
        />
      </Admin>
    );
  }
}

export default TelaLogin;
