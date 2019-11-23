import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { InstituicaoList } from '../admin/instituicoes/list';
import { InstituicaoCreate } from '../admin/instituicoes/create';
import { InstituicaoEdit } from '../admin/instituicoes/edit';
// import { InstituicaoDelete } from '../admin/instituicoes/delete';

import { ItinerarioList } from '../admin/itinerarios/list';
import { ItinerarioCreate } from '../admin/itinerarios/create';
import { ItinerarioEdit } from '../admin/itinerarios/edit';
// import { ItinerarioDelete } from '../admin/itinerarios/delete';

const dataProvider = jsonServerProvider(
  'http://www.hml.ages.pucrs.br:4301/api/v1'
);

export class TelaLogin extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="instituicao"
          list={InstituicaoList}
          edit={InstituicaoEdit}
          create={InstituicaoCreate}
          // delete={InstituicaoDelete}
        />
        <Resource
          name="itinerario"
          list={ItinerarioList}
          edit={ItinerarioEdit}
          create={ItinerarioCreate}
          // delete={ItinerarioDelete}
        />
      </Admin>
    );
  }
}

export default TelaLogin;
