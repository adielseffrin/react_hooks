//import {useEffect, useState} from 'react';

function Horario({horaAtual}){

  //const [horaAtual, setHoraAtual] = useState(new Date());



  return (
    <div
      style = {{color: "#0f0"}}
    >
      <p>Hoje é {horaAtual.toLocaleString()}</p>
    </div>
  )
}

export default Horario;