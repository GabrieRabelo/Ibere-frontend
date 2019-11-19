import React from 'react';

export const Horarios = ({ record = {} }) => {
  if (!record.horarios) {
    return null;
  }

  return record.horarios.map(horario => {
    return (
      <p key={horario.dia}>
        {`${horario.dia}: ${horario.horarioAbertura} - ${horario.horarioEncerramento}`}
      </p>
    );
  });
};
