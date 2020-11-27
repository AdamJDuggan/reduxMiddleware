import { createSlice } from '@reduxjs/toolkit'





const actions = {
  addError : (state, action) => ({
    ...state, type: action.payload.type, message: actions.payload.message
  })
}

const errorsSlice = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {
   ...actions
  }
})

export const { addError } = errorsSlice.actions

export default errorsSlice.reducer;
  