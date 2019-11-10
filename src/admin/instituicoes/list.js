import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import { Horarios } from '../horarios'

export const InstituicaoList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nome" />
      <TextField source="endereco" />
      <EmailField source="email" />
      <TextField source="telefone" />
      <TextField source="latitude" />
      <TextField source="longitude" />
      <Horarios source="horarios" />     
    </Datagrid>
  </List>
  );