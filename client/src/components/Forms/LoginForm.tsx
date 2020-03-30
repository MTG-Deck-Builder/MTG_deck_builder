// packages
import React, { useState } from "react";

// modules
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

  return (
    <>
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
    </>
  );
};

export default LoginForm;
