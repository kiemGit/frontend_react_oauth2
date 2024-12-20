import React from "react";
import { login } from "../auth";

const LoginButton = () => {
  return <button onClick={login}>Login with OAuth2</button>;
};

export default LoginButton;
