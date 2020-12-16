
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {TodosStore} from "./store/TodosStore";
import {resetErrors} from "./store/ErrorsStore";
import {reduxAsync} from "./store/store";
import usePending from "./store/usePending";
import useErrors from "./store/useErrors";


const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos || null);
  
  const pending = usePending();
  const errors = useErrors();
  
  const [text, setText] = useState("")

  const fetchTodos = () => 
  reduxAsync("TodosStore.add", () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()))


  return (
    <div className="hero">
      
     <div className="container mt-5">
    
    {pending && (
    <div class="hero is-warning mv-4">
      PENDING
    </div>
    )}
     
     {errors && (
        <article className="message is-danger mv-4">
          <div className="message-header">
            <p>Error</p>
            <button 
            onClick={() => dispatch(resetErrors())}
            className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">
            {errors[0].message}
          </div>
        </article>
        )}

     <input
     placeholder="Create a todo" 
     className="input is-link"
     onChange={e => setText(e.target.value)}
     value={text} type="text"/>
     <button
     className="button is-link"
     onClick={() => dispatch(TodosStore.add({title: text}))}
     >Add a todo</button>
     <br/> <br/>
     <button
     className="button is-primary"
      onClick={() => dispatch(fetchTodos()) }
     >Fetch a todo</button> 
      <br/> <br/>
     {todos && 
     <>
     <h1 className="">Todos:</h1>
     {todos.map((todo, index) => (<p key={index}>{index + 1}. {todo.title}</p>))}
      </>
    } 
      <br/>
      </div>
    </div>
  );
}

export default App;
