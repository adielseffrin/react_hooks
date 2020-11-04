import React, {useState} from "react";


export default function Button(){
  const [buttonText, setButtonText] = useState("click me, please");

  return (
    <button onClick={()=>setButtonText("Thank you for clicking!")}>{buttonText}</button>
  )
};