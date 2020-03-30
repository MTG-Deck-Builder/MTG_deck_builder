// packages
import React from "react";

// modules
import "./login.scss";
import Button from "../../components/Button/Button";
import LoginForm from "../../components/Forms/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="login-page-container">
      <div className="input-button-container">
        <LoginForm />
        <Button buttonText="Log In" />
      </div>
    </div>
  );
};

export default Login;
