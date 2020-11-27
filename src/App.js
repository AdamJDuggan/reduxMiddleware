

import { useDispatch, useSelector } from "react-redux";
import  {addTodo}  from "./store/TodosStore";
import CounterStore from "./store/CounterStore";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos || []);
  const count = useSelector(state => state.counter);

  return (
    <div className="App">
     {/* <button
      onClick={() => dispatch(addTodo({id: todos.length + 1, text: "work"})) }
     >Works</button>
     <button
      onClick={() => dispatch(addTodo({id: todos.length + 1, text: "dont"})) }
     >Dont work</button> */}
     <button
     onClick={() => dispatch(CounterStore.increment(2))}
     >Add 2</button>
      <button
     onClick={() => dispatch(CounterStore.increment(3))}
     >Add 3</button>
     <br/>
     {count}
     {/* {todos.map(todo => (<p>{todo.text}</p>))} */}
    </div>
  );
}

export default App;
