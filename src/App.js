
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {TodosStore} from "./store/TodosStore";
import {reduxAsync} from "./store/store";
import usePending from "./store/usePending";
import useErrors from "./store/useErrors";


const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos || null);
  const pending = usePending();
  const errors = useErrors("todos", "auth");
  const [text, setText] = useState("")

  const fetchTodos = () => reduxAsync("todos/addTodo", () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()))



  return (
    <div className="container">
       {/* {errors && <p>Errors</p>} 
      {pending && <p>Pending</p>} */}
     <button
      onClick={() => dispatch(fetchTodos()) }
     >Fetch a todo</button> 
     <br/> 
     <br/> 
     <input
     placeholder="Create a todo" 
     onChange={e => setText(e.target.value)}
     value={text} type="text"/><button
     onClick={() => dispatch(TodosStore.actions.addTodo({title: text}))}
     >Submit</button>
     
     <br/>
     {todos && 
     <>
     <p>Todos:</p>
      {todos.map((todo, index) => (<p key={index}>{todo.title}</p>))}
      </>
    } 
      <br/>
    
    </div>
  );
}

export default App;
