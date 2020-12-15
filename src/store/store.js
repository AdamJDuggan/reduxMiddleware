import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {addPending, removePending, PendingReducer} from "./PendingStore";
import {addError, ErrorsReducer} from "./ErrorsStore";
import {TodosStore, TodosReducer} from "./TodosStore"
import middleware from "./middleware";


// Global Store 
const globalStore = configureStore({
  reducer: combineReducers({
    errors: ErrorsReducer,
    pending: PendingReducer,
    todos: TodosReducer
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default globalStore;

//Stores  
const stores = [
  {type: "todos", actions: TodosStore}
 ]

const reduxAsync = (actionPath, fetch) => {
    const store = stores.find(store => store.type === actionPath.split("/")[0]) || null;
    const action = store ? store.actions[actionPath.split("/")[1]]|| null : null; 
   
    if(store && action){ 
      return async dispatch => {
        globalStore.dispatch(addPending(actionPath))
    try{
        const responce = await fetch();
        globalStore.dispatch(removePending(actionPath))
        globalStore.dispatch(store.actions[actionPath.split("/")[1]](responce))
        }
    catch(error){
        globalStore.dispatch(removePending(actionPath))
        globalStore.dispatch(addError({type: actionPath, message: error.toString()}))
        }
    }   
    }
    else{
      globalStore.dispatch(addError({type: "Redux action not found", message: `The redux store does not contain a action at this path: ${actionPath}`}))
    }
       
} 

export {reduxAsync};