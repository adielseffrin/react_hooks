import React, {useState, useEffect} from "react";

export default function DataLoader(){
  const [data, setData] = useState([]);
  

  useEffect(()=>{
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => setData(data));
  },[]);

  
  return (
    <div>
      
      <ul>
        {data.map(el => (
            <li key={el.id}>{el.login}</li>
        ))}

      </ul>
    </div>
  )
}
/*
CRIAR UM INPUT
FAZER UM FILTRO PARA PREENCHER O INPUT
*/