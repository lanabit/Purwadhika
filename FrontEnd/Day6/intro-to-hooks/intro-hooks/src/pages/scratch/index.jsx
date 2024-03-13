import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Scratch() {
  const [char, setChar] = useState('')
  const [warn, setWarn] = useState('')
  let a;
  function onSetChar(e) {
    a = e.target.value;
    if(char.length > 15){
      onWarn()
    }else{
      setChar(a);
    }
  }
  function onWarn(){
    setWarn("max 15 char")
  }
//const inputUsername = useRef()

  return(
    <>
    <div>
      <h1>
        {char}
      </h1>
      <input type="text" onChange={(e) => onSetChar(e)} placeholder="Type something..." />
      <br />
      <span>{warn}</span>
    </div>
    </>
  )
}