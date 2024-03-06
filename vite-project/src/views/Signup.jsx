import { Link } from "react-router-dom";

export default function Signup() {
  const onSubmit = (ev) => {
    ev.preventDefault();
}
  return (
    <div className="login-signup-form animated fadeInDown">
        <div className="form">
            <from onSubmit={onSubmit}>
            <h1 className="title">
                Sign up for free
            </h1>
                <input placeholder="Full Name" type="text"/>
                <input placeholder="Email Address" type="email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button className="btn btn-block">Login</button>
                <p className="message">
                    Already Registered? <Link to="/login">Sign in</Link>
                </p>
            </from>
        </div>
    </div>
  )
}
