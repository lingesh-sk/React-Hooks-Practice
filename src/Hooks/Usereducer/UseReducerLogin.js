import React, { useReducer } from "react";

function UseReducerLogin() {
  const initialState = {
    username: "",
    password: "",
    isLogin: false,
    isLoading: false,
  };

  function reducer(prevState, action) {
    switch (action.type) {
      case "USERNAME":
        return {
          ...prevState,
          username: action.payload,
        };
      case "PASSWORD":
        return {
          ...prevState,
          password: action.payload,
        };
        case "LOADING":
        return {
          ...prevState,
          isLogin: true,
        };
        case "LOGOUT":
            return {
              ...prevState,
              isLogin:false,
              username: "",
              password: ""
            };
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "LOADING" });
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Usereducer with Login</h1>

      {state.isLogin ? (
        <div>
          <h1>Welcome to landing page</h1>
          <button onClick={(e) => dispatch({ type: "LOGOUT" })}>Logout</button>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter the Name"
            value={state.username}
            onChange={(e) =>
              dispatch({ type: "USERNAME", payload: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Enter the Password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD", payload: e.target.value })
            }
          /><br/><br/>

          <button
            disabled={!(state.username && state.password)}
            onClick={()=>dispatch({ type: "LOADING" })}
          >
            {/* {state.isLoading ? "Please logging...." : "LogIn"} */}
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default UseReducerLogin;
