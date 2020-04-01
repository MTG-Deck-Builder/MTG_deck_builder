// packages
import React, { useState } from "react";
import axios from "axios";

// modules
import Button from "../Button/Button";
import "./loginForm.scss";

interface Creds {
  email?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState<Creds>({
    email: "",
    password: ""
  });

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/login", credentials);
    console.log("Checking to see what is in the user object");
    console.log(res.config.data);
  };

  return (
    <form onSubmit={e => login(e)}>
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={credentials.password}
        onChange={handleChange}
      />
      <Button buttonText="Log In" />
    </form>
  );
};

export default LoginForm;
