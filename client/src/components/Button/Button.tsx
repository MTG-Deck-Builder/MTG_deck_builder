// packages
import React from "react";

// modules
import "./button.scss";

interface Props {
  buttonText: string;
}

const Button: React.FC<Props> = ({ buttonText }) => {
  return <button>{buttonText}</button>;
};

export default Button;
