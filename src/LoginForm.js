import React, { useState } from "react";

function isValidUser(username, password) {
    if(username==="admin" && password==="admin") return true;
    else return false;
  }

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidUser(username, password)) {
      props.onLogin(username);
    } else {
      alert("Invalid username or password");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;