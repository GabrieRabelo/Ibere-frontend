import React from 'react';

import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  LongTextInput,
  ArrayInput,
  SimpleFormIterator
} from 'react-admin';

export const InstituicaoCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nome" />
      <TextInput source="endereco" />
      <NumberInput source="tempo_visita" />
      <LongTextInput source="descricao" />
      <TextInput source="latitude" />
      <TextInput source="longitude" />
      <TextInput source="email" />
      <TextInput source="telefone" />
      <TextInput source="observacoes" />
      <ArrayInput source="imagens">
        <SimpleFormIterator>
          <TextInput source="url" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="horarios">
        <SimpleFormIterator>
          <TextInput source="dia" />
          <TextInput source="horario_abertura" />
          <TextInput source="horario_encerramento" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
