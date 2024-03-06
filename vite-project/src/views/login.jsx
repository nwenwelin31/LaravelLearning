import { Link } from "react-router-dom";

export default function Login() {
  const onSubmit = (ev) => {
    ev.preventDefault();
}
  return (
    <div className="login-signup-form animated fadeInDown">
        <div className="form">
            <from onSubmit={onSubmit}>
            <h1 className="title">
                Login into Your Account
            </h1>
                <input placeholder="Email" type="email"/>
                <input type="password" placeholder="Password"/>
                <button className="btn btn-block">Login</button>
                <p className="message">
                    Not Registered? <Link to="/signup">Create an account</Link>
                </p>
            </from>
        </div>
    </div>
  )
}
