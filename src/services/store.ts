import { createStore } from "redux";

const reducer = (state = { isLogged: false }, action: any) => {
  if (action.type === "setLogin") {
    return { isLogged: (state.isLogged = true) };
  }
  if (action.type === "setLogout") {
    return { isLogged: (state.isLogged = false) };
  }

  return state;
};

const store = createStore(reducer);
export default store;
