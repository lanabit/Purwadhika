import { memo } from "react";

const Todos = ({todos, addToDo}) => {
  console.log("child render");
  return(
    <>
    <h3>My Todos</h3>
    {todos.map((todo, index)=>{
        return <p key={index}>{todo}</p>
      })}
    <button onClick={addToDo}>Add To Do</button>
    </>
  )
}

export default memo(Todos)