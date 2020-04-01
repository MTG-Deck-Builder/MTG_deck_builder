// packages
import React from "react";

// modules
import "./login.scss";
import LoginForm from "../../components/Forms/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="login-page-container">
      <LoginForm />
    </div>
  );
};

export default Login;
