import React from 'react'
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Demosignup() {


  const [username, setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate();
  
  const handleUserName = (e) => {
    console.log(e);
    setUserName(e.target.value);
};

const handleEmail = (e) => {
      console.log(e);
      setEmail(e.target.value);
    };
    
    const handlePassword = (e) => {
      console.log(e);
  setPassword(e.target.value);
  };
 
 
  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(username,email,password);
  if (username === "" ||password === ""||email==="") 
  {
  toast.error("Enter all fields");
  } 
  else {
 
  axios.post("http://localhost:8080/savedata",{
  username: username,
  email: email,
  password: password,
  })
  .then((res) => {
  console.log(res.data);
  if(res.data===' signup successfull')
  {
      toast.success("User Added Successfully");
      setUserName('');
      setEmail('');
      setPassword('');
  }
  else if(res.data==='Email & Username already exist'){
    toast.error("Email & Username already exist");
   }
   else if(res.data===' Email already exist'){
   toast.error(" Email already exist");
    }
   else if(res.data===' Username already exist')
   {
     toast.error("Username already exist");
   }
  });
  }
  };
  return (
    <div className="tdx">
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
        <h2>Add User</h2>
        <div class="input_group">
          <i class="fa fa-user"></i>
          <input
            onChange={(handleUserName)}
            value={username}
            type="text"
            placeholder="Username"
            class="input_text"
            autocomplete="off"
            required
          />
        </div>
        <div class="input_group">
          <i class="fa fa-email"></i>
          <input
            onChange={handleEmail}
            value={email}
            type="text"
            placeholder="Email"
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
          <a><h5>ADD USER</h5></a>
        </div>
        <br/>      
    </div>
    </div>
    </div>
    </div>
  )
}
