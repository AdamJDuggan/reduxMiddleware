import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    addError: (state, action) => {
      return [...state, action.payload] 
    },
    resetErrors: (state, action) =>  initialState
  }
})

export const {addError, resetErrors}  = errorsSlice.actions

export const ErrorsReducer =  errorsSlice.reducer;


  