// import logo from "./logo.svg";
import "./App.css";
// import { Button } from "react-bootstrap";
import React from "react";
// import ReactDOM from "react-dom";
//import Header from "./component/header";
import Main from "./component/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import UpdateProduct from "./updateproduct/UpdateProduct";
import AddProduct from "./addproduct/addproduct";
import Protected from "./protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/">
            <Route Index element={<Main/>} />
            <Route path="home" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="add" element={ <Protected Cmp= {AddProduct} />} />
            <Route path="update" element={<Protected Cmp= {UpdateProduct} />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
