import { createSlice } from '@reduxjs/toolkit';


const initialState = []

const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload] 
    },
    reset: (state, action) => {
      return initialState
    }
  }
})


export const TodosStore = TodosSlice.actions;

export const TodosReducer = TodosSlice.reducer;


