import { configureStore, combineReducers } from "@reduxjs/toolkit"
import middleware from "./middleware"
import pendingReducer from "./PendingStore"
import todoReducer from "./TodosStore"
import errorsReducer from "./ErrorsStore"




const store = configureStore({
  reducer: combineReducers({
    errors: errorsReducer,
    pending: pendingReducer,
    todos: todoReducer
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),


});

export default store;