import React, { useState } from 'react';
import { signup } from "../Api/index";
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ name, password, role });
    console.log('Form Data:', formData);
    
    signup(formData)
      .then((data) => {
        console.log(data);
        if(data.role=="client")
        history.push('/client');
        else if(data.role=="employee")
        history.push('/employee');
        else
        history.push('/admin')
        
      })
  
    
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <select id="role" value={role} onChange={handleRoleChange}>
          <option value='client'>Client</option>
          <option value='admin'>Admin</option>
          <option value='employee'>Employee</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
