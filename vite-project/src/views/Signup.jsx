import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-Client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [errors,setErrors] = useState({});
  const {setUser, setToken} = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmation:passwordConfirmationRef.current.value,
    }
    // form data
    axiosClient.post('/signup',payload)
    .then(({data}) => {
      setUser(data.user);
      setToken(data.token);
    })
    .catch(err => {
      const response = err.response;
      if(response && response.status === 422){
        setErrors(response.data.errors);
      }
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h1 className="title">Sign up for free</h1>
      {console.log(errors)}
      {/* {errors &&
      <div className="alert">
          {Object.keys(errors).map(key => {
            <p key={key}>{errors[key][0]}</p>
          })}
      </div>
      } */}
      <input ref={nameRef} placeholder="Full Name" type="text" />
      <input ref={emailRef} placeholder="Email Address" type="email" />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <input ref={passwordConfirmationRef} type="password" placeholder="Confirm Password" />
      <button className="btn btn-block" type="submit">Sign up</button>
      <p className="message">
        Already Registered? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
}
