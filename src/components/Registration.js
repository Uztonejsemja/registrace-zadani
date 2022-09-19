import React from 'react';
import { useState } from 'react';
import './Registration.css'

const Registration = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  return(
    <>
    <form>
        
        <input type="email" id="email" placeholder="Email Address" required></input>
        <input type="text" id="username" placeholder="User Name"></input>
        <input type="password" id="password" placeholder="Password"></input>
        <input type="password" id="passwordConfirm" placeholder="Confirm Password"></input>
        <button>REGISTER</button>
      </form>
    </>
  );
};

export default Registration;
