import { createSlice } from '@reduxjs/toolkit'


const pendingSlice = createSlice({
  name: 'todos',
  initialState: ["users/addUser", "users/removeUser", "characters/update"],
  reducers: {
    addPending: (state, action) => {
      return [...state, action.payload] 
    },
    removePending: (state, action) => state.filter(item => item !== action.payload)
  }
})

export  const {addPending, removePending}  = pendingSlice.actions

export default pendingSlice.reducer;

  