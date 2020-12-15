import { createSlice } from '@reduxjs/toolkit'


const errorsSlice = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {
    addError: (state, action) => {
      return [...state, action.payload] 
    }
  }
})

export const {addError}  = errorsSlice.actions

export const ErrorsReducer =  errorsSlice.reducer;


  