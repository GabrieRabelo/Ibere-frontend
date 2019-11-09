import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/joaocv3/sample_endpoint_ibere');

export class TelaLogin extends Component {

  render() {
    return (
        <Admin dataProvider={dataProvider} >
        <Resource name="instituicoes" list={ListGuesser} />
        </Admin>
    );
  }
}

export default TelaLogin;
