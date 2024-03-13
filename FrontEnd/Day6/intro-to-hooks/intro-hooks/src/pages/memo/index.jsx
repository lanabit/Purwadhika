import { useState, useMemo, useEffect } from "react";

export default function Memoit(){
  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => setCounter((prev)=>prev+1); 
  const incrementNumber = () => setNumber((prev)=>prev+1);
  
  const isEvenNumber = useMemo(() => {
    let i = 0;
    while(1 < 200) i++
    return number % 2 === 0
  },[number]);

  // useEffect(() => {
  //   console.log("number change")
  // }, [number])

  // useEffect(() => {
  //   console.log("counter change")
  // }, [counter])

  return(
    <div>
      <button onClick={incrementCounter}>Counter: {counter}</button>
      <button onClick={incrementNumber}>Number: {number}</button>
      <div>{isEvenNumber ? "even" : "odd"}</div>
    </div>
  )
}