import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, isLogged } from "./actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const login = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello</h1>
      <h3>{login ? "Welcome" : !login ? "Please Login" : null}</h3>
      <h2>You have clicked {counter} times</h2>
      <button onClick={() => dispatch(increment(5))}>INCREASE</button>
      <button onClick={() => dispatch(decrement(5))}>DECREASE</button>
      <button onClick={() => dispatch(isLogged())}>
        {login ? "LOGOUT" : "LOG IN"}
      </button>
    </div>
  );
}

export default App;
