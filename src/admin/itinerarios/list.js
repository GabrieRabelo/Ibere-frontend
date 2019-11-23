import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ItinerarioList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <TextField source="tempoCaminhada" />
      <TextField source="tempoCarro" />
      <TextField source="tempoBicicleta" />
    </Datagrid>
  </List>
);
