import React, { useState, useEffect } from 'react';

// com a prop setTimeIntervalToUpdate podemos definir no componente
// pai um intervalo diferente de 1 sec
export default function Relogio({ setTimeIntervalToUpdate = 1000 }) {
// coloquei o estado neste componente porque assim sempre que mudar
// o estado apenas é renderizado este componente
  const [horaAtual, setHoraAtual] = useState(new Date());
  useEffect(() => {
    const relogio = setTimeout(() => {
      setHoraAtual(new Date());
    }, setTimeIntervalToUpdate);
    return () => clearTimeout(relogio);
  });

  return (
    <div style={{ color: '#0f0' }}>
      <p>
        Hoje é
        { horaAtual.toLocaleString() }
      </p>
    </div>
  );
}
