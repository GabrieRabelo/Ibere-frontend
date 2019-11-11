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
      <NumberInput source="tempoVisita" />
      <LongTextInput source="descricao" />
      <NumberInput source="latitude" />
      <NumberInput source="longitude" />
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
          <TextInput source="horaAbertura" />
          <TextInput source="horaFechamento" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="redes">
        <SimpleFormIterator>
          <TextInput source="redeSocial" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);