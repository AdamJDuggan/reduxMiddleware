import {
    createReducer,
    createAction,
  } from "@reduxjs/toolkit";
  import { useDispatch, useSelector } from "react-redux";


const increment2 = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

// const increment = (payload) => increment2(payload);
const increment = createAction("increment", payload => {
    if(payload === 2) return Promise.resolve(payload)
    else{Promise.reject(payload)}
})


const reducer = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1
});

export default { reducer, increment, decrement };
