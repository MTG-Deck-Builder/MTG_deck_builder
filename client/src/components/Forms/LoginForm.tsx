// packages
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router";

// modules
import Button from "../Button/Button";
import "./loginForm.scss";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../reducers/index";

interface Creds {
  email: string;
  password: string;
}

interface Props {
  history: any;
}

const LoginForm: React.FC<Props> = ({ history }) => {
  const [credentials, setCredentials] = useState<Creds>({
    email: "",
    password: "",
  });
  const [validEmail, setValidEmail] = useState<Boolean>(true);
  const email_regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async (e: any) => {
    e.preventDefault();
    if (email_regex.test(credentials.email)) {
      setValidEmail(true);
      dispatch({ type: LOGIN_START });
      try {
        const res = await axios.post(
          "http://localhost:5000/login",
          credentials
        );
        if (res.data.token) {
          dispatch({ type: LOGIN_SUCCESS, payload: res.data });
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.user_id);
          history.push("/dashboard");
        } else {
          dispatch({ type: LOGIN_FAILURE, payload: res.data });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setValidEmail(false);
    }
  };

  return (
    <form onSubmit={(e) => login(e)}>
      <input
        type="text"
        name="email"
        placeholder="Enter email"
        value={credentials.email}
        onChange={handleChange}
      />
      {!validEmail ? (
        <p style={{ color: "red", background: "blue", fontSize: "2rem" }}>
          Please enter a valid email address
        </p>
      ) : (
        <p></p>
      )}
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

export default withRouter(LoginForm);
