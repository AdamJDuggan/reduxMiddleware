
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo} from "./store/TodosStore";
import actionWrapper from "./store/actionWrapper";


const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos || null);
  const error = useSelector(state => state.errors[0] || null)
  const pending = useSelector(state => state.pending[0] || null)
  const fetchTodos = () => actionWrapper(addTodo, () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()))
  const [text, setText] = useState("")


  return (
    <div className="App">
      {error && <p>Error</p>}
      {pending && <p>Pending</p>}
     <button
      onClick={() => dispatch(fetchTodos()) }
     >Fetch a todo</button> 
     <br/> 
     <br/> 
     <input
     placeholder="Create a todo" 
     onChange={e => setText(e.target.value)}
     value={text} type="text"/><button
     onClick={() => dispatch(addTodo({title: text}))}
     >Submit</button>
     
     <br/>
     {todos && 
     <>
     <p>Todos:</p>
      {todos.map(todo => (<p>{todo.title}</p>))}
      </>
    } 
      <br/>
    
    </div>
  );
}

export default App;
