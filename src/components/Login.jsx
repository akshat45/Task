import React, { useState } from 'react';
import { login } from "../Api/index";
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [role, setRole] = useState('client');
  const [formData, setFormData] = useState({});
  // const navigate = useNavigate();
  const history = useHistory();
  const handleSubmit = (e) => {

    e.preventDefault();
    // setprocessing(true)
    setFormData({ name, password});;
    login(formData)
      .then((data) => {
        console.log(data);
        if(data.role=="client")
        history.push('/client');
        else if(data.role=="employee")
        history.push('/employee');
        else
        history.push('/admin')
          // navigate("/client");
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
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default withRouter(Login);
