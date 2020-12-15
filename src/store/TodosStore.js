import { createSlice } from '@reduxjs/toolkit';



const TodosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload] 
    },
    resetTodos: (state, action) => {
      return []
    }
  }
})


export const TodosStore = TodosSlice.actions;


export const TodosReducer = TodosSlice.reducer;


