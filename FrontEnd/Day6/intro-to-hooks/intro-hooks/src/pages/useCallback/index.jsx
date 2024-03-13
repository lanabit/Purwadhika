import {useState, useCallback} from "react"
import Todos from "../functions/todos"

export default function UseCallbackComponent() {
  const [todos, setTodos] = useState[[]];
  
  const addtodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"])
  },[setTodos])

  return(
    <div>
     <Todos todos={todos} addToDo={addtodo}></Todos>
    </div>
  )
}