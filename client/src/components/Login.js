import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";



const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [state, setState] = useState({
    credentials: {
      username: '',
      password: ''
    }
  });

  const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      } 
    });
  }
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('api/login', state.credentials)
      .then(res => {
        //res.data.payload
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form className="login" onSubmit={login}>
        
        <input 
          type="text"
          name="username"
          placeholder="Username"
          value={state.credentials.username}
          onChange={handleChange} />
        <input 
          type="text"
          name="password"
          placeholder="Password"
          value={state.credentials.password}
          onChange={handleChange} />
        <input type="submit" />

      </form>
    </>
  );
};

export default Login;
