//!THIS IS THE MOST BASIC WAY OF SETTING UP REDUX

import { configureStore, createSlice } from "@reduxjs/toolkit";

// import { createStore } from "redux";

// const reducer = (state = { isLogged: false }, action: any) => {
//   if (action.type === "setLogin") {
//     return { isLogged: (state.isLogged = true) };
//   }
//   if (action.type === "setLogout") {
//     return { isLogged: (state.isLogged = false) };
//   }

//   return state;
// };

// const store = createStore(reducer);
// export default store;

//?HERE WE'LL BE USING REDUX TOOLKIT

const slice = createSlice({
  name: "isLogged",
  initialState: { isLogged: false },
  reducers: {
    setLogin(state, action) {
      state.isLogged = action.payload;
    },
  },
});

export const actions = slice.actions;
const store = configureStore({
  reducer: slice.reducer,
});
export default store;
