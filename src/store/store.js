import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todosReducer from './TodosStore';
import errorsReducer from './TodosStore';
import CounterStore from "./CounterStore";

const actionWrapper = (store) => {
return (next) => {
  return (action) => {
    console.log("Action:", action);
    console.log("Prev state:", store.getState());
    const result = next(action);
    console.log("Next state:", store.getState());
    return result;
  }
}
} 

export default configureStore({
  reducer: combineReducers({
    todos: todosReducer,
    errors: errorsReducer,
    counter: CounterStore.reducer
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionWrapper),


});
