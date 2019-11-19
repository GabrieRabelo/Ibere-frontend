import React from 'react';

import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  LongTextInput,
  ArrayInput,
  SimpleFormIterator,
  DisabledInput,
  Toolbar
} from 'react-admin';

const PostEditToolbar = props => <Toolbar {...props}></Toolbar>;

export const InstituicaoEdit = props => (
  <Edit {...props}>
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
        <SimpleFormIterator toolbar={<PostEditToolbar />}>
          <DisabledInput source="url" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="horarios">
        <SimpleFormIterator>
          <DisabledInput source="dia" />
          <DisabledInput source="horaAbertura" />
          <DisabledInput source="horaFechamento" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="redes">
        <SimpleFormIterator>
          <DisabledInput source="redeSocial" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
