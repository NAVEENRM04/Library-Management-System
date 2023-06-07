import React from 'react'
import "./Login.css";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {


  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
 
  const navigate = useNavigate();
  
  const handleUserName = (e) => {
  setUserName(e.target.value);
  };
 
  const handlePassword = (e) => {
  setPassword(e.target.value);
  };
 
 
  const handleSubmit = (e) => {
  e.preventDefault();
  if (username === "" ||password === "") 
  {
  toast.error("Enter all fields");
  } 
  else {
 
 
  axios.get(`http://localhost:8080/login/loginbyusername/${username}/${password}`)
  .then((res) => {
  console.log(res.data);
  if(res.data==='login sucessfully')
  {
      toast.success(res.data);
     setTimeout(()=>
     {
         navigate("/home");
     },3000)
     
  }
  else
  {
  toast.error(res.data);
   }
  });
  }
  };
  return (
    <div className='demologinbody'>
    <div class="login_form_container">
    <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
      <div class="login_form">
        <h2>Login</h2>
        <div class="input_group">
          <i class="fa fa-user"></i>
          <input
            onChange={handleUserName}
            type="text"
            placeholder="Username"
            class="input_text"
            autocomplete="off"
            required
          />
        </div>
        <div class="input_group">
          <i class="fa fa-unlock-alt"></i>
          <input
          onChange={handlePassword}
          value={password}
            type="password"
            placeholder="Password"
            class="input_text"
            autocomplete="off"
            required
          />
        </div>
        <div onClick={handleSubmit} class="button_group" id="login_button">
          <a>Submit</a>
        </div>
      </div>
    </div>
    </div>
  )
}
