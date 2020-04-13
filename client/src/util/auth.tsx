import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:3000/",
  headers: localStorage.getItem("token")
});

export default auth;
