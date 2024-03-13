import { useState, useContext, createContext } from "react";
import UseCallbackComponent from "../useCallback";
const UserContext = createContext()

export default function Context() {
  const [user, setUser] = useState("");

  return (
    <>
      <h1>Context Page</h1>
      <UserContext.Provider value={user}>
      <div style={{border:'1px solid blue', padding:10}}>
        <h3>Component 1</h3>
        <input type="text" onChange={(e) => setUser(e.target.value)}></input>
        <Component2></Component2>
      </div>
      </UserContext.Provider>
      <UseCallbackComponent></UseCallbackComponent>
    </>
  )
}

function Component2() {
  return(
    <div style={{border:'1px solid red', padding:10}}>
      <h3>Component 2</h3>
      <Component3></Component3>
    </div>
  )
}

function Component3() {
  const user = useContext(UserContext);

  return(
    <div style={{border:'1px solid yellow', padding:10}}>
      <h3>Component 3</h3>
      <div>{user}</div>
    </div>
  )
}