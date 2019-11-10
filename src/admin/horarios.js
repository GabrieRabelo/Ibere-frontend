import React from 'react';

export const Horarios = ({ record = {} }) => {
  return record.horarios.map(horario => {
    return (
      <p key={horario.dia}>
        {`${horario.dia}: ${horario.horario_abertura} - ${horario.horario_encerramento}`}
      </p>
    );
  });
};
