import { createSlice } from '@reduxjs/toolkit'
import {addError} from "./ErrorsStore";
import {useDispatch} from "react-redux";


const addTodo2 =  (state, action) => {
  const { id, text } = action.payload
  if(action.payload.text === "dont") return addError({type: "addTodo", message: "Message here"})
  state.push({ id, text })

}


const actions = {
  addTodo : addTodo2
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
   ...actions
  }
})

export const { addTodo } = todosSlice.actions

export default todosSlice.reducer;
