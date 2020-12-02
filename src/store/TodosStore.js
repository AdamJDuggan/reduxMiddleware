import { createSlice } from '@reduxjs/toolkit'


const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload] 
    }
  }
})

export  const {addTodo}  = todosSlice.actions

export default todosSlice.reducer;
