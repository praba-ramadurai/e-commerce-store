import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {}, []);

  return (
    <div className="section section-center">
      <h1>Login</h1>
      <div className="col-sm-6 offset-sm-3">
        <input type="text" placeholder="email" className="form-control" />
        <br /> <br/>
        <input type="email" placeholder="Password" className="form-control" />
        <br /> <br/>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Login;
