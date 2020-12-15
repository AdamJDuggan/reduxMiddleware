import { createSlice } from '@reduxjs/toolkit'


const pendingSlice = createSlice({
  name: 'pending',
  initialState: [],
  reducers: {
    addPending: (state, action) => {
      return [...state, action.payload] 
    },
    removePending: (state, action) => state.filter(item => item !== action.payload)
  }
})

export  const {addPending, removePending}  = pendingSlice.actions

export const PendingReducer =  pendingSlice.reducer;

  