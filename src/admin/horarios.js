import React from 'react';

export const Horarios = ({ record = {}, source }) => {
  return (
    record.horarios.map ( horario => {
      return (
        <p>
        {`${horario.dia}: ${horario.horario_abertura} - ${horario.horario_encerramento}`}
        </p>   
      )
    })     
  );
}
    