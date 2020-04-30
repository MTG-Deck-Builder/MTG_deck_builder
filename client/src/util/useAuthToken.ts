import { useState, useEffect } from "react";
import jwtdecode from 'jwt-decode';

type Token = {
  exp: number;
}

const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const deleteToken = () => {
    localStorage.removeItem('token');
  }

  const decodeToken = (tkn = token): Token | false => {
    if (!tkn) return false;
    return jwtdecode(tkn);
  }

  const validateToken = () => {
    const decodedToken = decodeToken();
    if (!decodedToken) return false;
    const now = Date.now();
    const stillValid =  now > decodedToken.exp;

    if (stillValid) return true;
    deleteToken();
    return false;
  }

  return {
    validateToken
  }
}

export default useAuthToken;