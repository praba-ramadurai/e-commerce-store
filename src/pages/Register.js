import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();

  useEffect(() => {
if(localStorage.getItem('user-info')){
    history.push('/error')
}

  }, []);
 
  const handleChange=(e)=>{
    e.preventDefault();

  }

  return (
    <div className="section section-center page-100">
      <h1>Register</h1>
      <div className="">
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="email" className="form-control" />
        <br /> <br/>
        <input type="email" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" className="form-control" />
        <br /> <br/>
        <button className="btn btn-primary" onClick={handleChange}>Login</button>
      </div>
    </div>
  );
};

const Wrapper=styled.section`
display: flex;
text-align: center;
align-items: center;
input{
    width:100%;
    height:5rem;
    border-radius: 5px;
}
`

export default Register;
