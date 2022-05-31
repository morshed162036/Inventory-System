import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";
// import {Helper, signUp } from './helper';
import { Button } from "react-bootstrap";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add", { replace: true });
    }
  });

  async function signUp() {
    let item = { name, email, password };
    //console.warn(item);
    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
    //console.warn(result.message);
    if (result.name !== "undefined" && result.name != null) {
      //console.warn("result",result);
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/add", { replace: true });
    }
  }

  return (
    <>
      <Header />

      <div className="col-sm-6 offset-sm-3">
        <h1>Register page</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <div className="mb-3" controlId="formBasicEmail">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <text className="text-muted">
            We'll never share your email with anyone else.
          </text>
        </div>

        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signUp} variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </>
  );
}
export default Register;
