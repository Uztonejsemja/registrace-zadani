import React, { useEffect } from 'react';
import { useState } from 'react';
import './Registration.css';
import icon from './img/icon.png';

const Registration = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [error, setError] = useState({});
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validate(user));
    setValid(true);
    console.log(user);
    setUser({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleEmail = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    if (user.email.indexOf('@') >= 0 && user.username.length === 0) {
        setUser({
          ...user,
          username: user.email.split('@')[0],
        });
    };
  };

  const validate = (values) => {
    const errorMsgs = {};
    if (!values.email) {
      alert('Enter your email');
    }
    if (!values.password) {
      alert('Password is required');
    }
    if (values.passwordConfirm !== values.password) {
      alert('Passwords have to match');
    }
    else return alert('Successfully submitted')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <img src={icon} alt="icon"></img>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleEmail}
        />
        
        <input
          type="text"
          placeholder="User Name"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        
        <input
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={user.passwordConfirm}
          onChange={handleChange}
        />

        <button type="submit">REGISTER</button>
      </form>
    </>
  );
};

export default Registration;
