import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    console.log('Registration data:', formData);
  };

  return (
    <div className="register-page">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
          <div className="form-group">
          <label>phonenumber</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
          <div className="form-group">
          <label>Country</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
          <div className="form-group">
          <label>Shopname</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}

export default Register;