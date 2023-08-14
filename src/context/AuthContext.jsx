import React, { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../components/firebase.config";

const Context = createContext();

function AuthContext({ children }) {
  const changeContext = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, user: action.payload };
      case "LOGOUT":
        return { ...state, user: null };
      case "AUTH_READY":
        return { ...state, user: action.payload, ready: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(changeContext, {
    user: null,
    ready: false
  });

  const loginIn = (user)=>{
    dispatch({
      type: "LOGIN",
      payload: user
    })
  }


  const logOut = async ()=>{
    await projectAuth.signOut()
    dispatch({type: "LOGOUT"})
  }

const unsup = projectAuth.onAuthStateChanged((user) => {
  dispatch({
    type: "AUTH_READY",
    payload: user,
  });
});

  useEffect(()=>{
    unsup()
  }, [])


  return (
    <Context.Provider value={{ ...state, loginIn, logOut }}>
      {children}
    </Context.Provider>
  );
}

export { AuthContext, Context };
