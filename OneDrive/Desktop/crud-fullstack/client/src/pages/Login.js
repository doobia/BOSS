import React, { useContext, useRef } from "react";

import {AuthContext} from "../Context/AuthContext";
import {loginCall} from '../apiCalls'
const Login = () => {

  let Email = useRef();
  let Password = useRef();
  let {isFetching, dispatch} = useContext(AuthContext)
  
let validate = (e) => {
    e.preventDefault();
    loginCall({email: Email.current.value, password: Password.current.value}, dispatch)
  };
  
  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <form className="w-50" onSubmit={(e) => validate(e)} action="">
        <p>Email</p>
        <input ref={Email} required type="text" className="form-control" />
        <p>Password</p>
        <input ref={Password} required type="text" className="form-control" />
        <button className="btn btn-primary mt-3" type="submit">
          Login !
        </button>
      </form>
    </div>
  );
};

export default Login;
