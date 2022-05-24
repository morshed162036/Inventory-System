import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";
function Login() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      Navigate("/add", { replace: true });
    }
  });
  return (
    <div>
      <Header />
      <h1>Login page</h1>
    </div>
  );
}
export default Login;
