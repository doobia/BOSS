import { useRef, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { loginCall } from "../apiCalls";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  let navigate = useNavigate();
  const Username = useRef();
  const Email = useRef();
  const Password = useRef();

  let validate = async (e) => {
    e.preventDefault();
    await fetch("users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: Username.current.value,
        email : Email.current.value,
        password : Password.current.value
      })
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    navigate('/login');
  };
  return (
    <div className="container d-flex flex-column align-items-center mt-4">
      <form className="w-50" onSubmit={(e) => validate(e)} action="">
        <p>Username</p>
        <input ref={Username} required type="text" className="form-control" />
        <p>Email</p>
        <input ref={Email} required type="text" className="form-control" />
        <p>Password</p>
        <input
          ref={Password}
          minLength="6"
          required
          type="text"
          className="form-control"
        />
        <button className="btn btn-primary mt-3" type="submit">
          Sign up !
        </button>
      </form>
    </div>
  );
};

export default Signup;
