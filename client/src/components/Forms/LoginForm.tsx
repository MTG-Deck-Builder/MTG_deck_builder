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
  email?: string;
  password?: string;
}

interface Props {
  history: any;
}

const LoginForm: React.FC<Props> = ({ history }) => {
  const [credentials, setCredentials] = useState<Creds>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async (e: any) => {
    e.preventDefault();
    dispatch({ type: LOGIN_START });
    const res = await axios.post("http://localhost:5000/login", credentials);
    if (res.data.token) {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user_id);
      history.push("/dashboard");
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: res.data });
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
