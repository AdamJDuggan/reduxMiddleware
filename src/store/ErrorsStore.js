// import React from "react";
// import {
//     createReducer,
//     createAction,
//   } from "@reduxjs/toolkit";

// const store = "errors";
// const initialState = [];

// const add = createAction(`${store}/add`);


// const reducer = createReducer(initialState,{ 
//   [add] : (state, action) => state.push({type: action.payload.method, message: action.payload.error}),
// });

// export default { reducer, add };

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

export  const {addError}  = errorsSlice.actions

export default errorsSlice.reducer;


  