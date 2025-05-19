import React, { useState } from 'react';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic here
    console.log('Login attempt:', credentials);
  };

  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;