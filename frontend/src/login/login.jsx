import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  // async function insert() {
  //   const item = { email, password };
  //   console.warn(item);

  //   console.warn(JSON.stringify(item));
  //   let result = await fetch("http://localhost:8000/api/entry", {
  //     method: "POST",
  //     body: JSON.stringify(item),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   //console.warn(result);
  //   result = await result.json();
  //   console.warn(result);
  //   //localStorage.setItem("user-info", JSON.stringify(result));
  //   //Navigate("/add", { replace: true });
  // }

  async function insert() {
    let item = { email, password };
    //console.warn(item);
    // let formData = new FormData();
    // formData.append("email", email);
    // formData.append("password", password);
    try {
      let result = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      //alert("login");

      result = await result.json();
      // console.warn(result.message);
      // // if (result.email !== "undefined" && result.email != null) {
      console.warn("result", result);
      localStorage.setItem("user-info", JSON.stringify(result));
      Navigate("/deshboard", { replace: true });
      // }
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      Navigate("/deshboard", { replace: true });
    }
  });
  return (
    <div>
      <Header />
      <h1>Login page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="email"
          placeholder="Email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={insert}>
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
