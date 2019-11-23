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

export const ItinerarioCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="tempoCaminhada" />
      <NumberInput source="tempoCarro" />
      <NumberInput source="tempoBicicleta" />
      <TextInput source="nome" />
      <ArrayInput source="instituicoes">
        <SimpleFormIterator>
          <TextInput source="id" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
