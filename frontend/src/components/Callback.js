import React, { useEffect } from "react";
import { handleCallback } from "../auth";

const Callback = () => {
  useEffect(() => {
    handleCallback().then((tokens) => {
      localStorage.setItem("access_token", tokens.access_token);
      alert("Login successful!");
      window.location = "/protected";
    });
  }, []);

  return <div>Authenticating...</div>;
};

export default Callback;
