// import logo from "./logo.svg";
import "./App.css";
// import { Button } from "react-bootstrap";
import React from "react";
// import ReactDOM from "react-dom";
//import Header from "./component/header";
import Main from "./component/main";
import Home from "./component/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import UpdateCategory from "./category/UpdateCategory";
import AddCategory from "./category/addcategory";
import CategoryList from "./category/categorylist";
import UpdateProduct from "./product/UpdateProduct";
import AddProduct from "./product/addproduct";
import ProductList from "./product/productlist";
import Protected from "./protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/">
            <Route exact path="/" element={<Main />} />
            <Route path="home" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="deshboard" element={<Protected Cmp={Home} />} />

            <Route path="addcategory" element={<Protected Cmp={AddCategory} />} />
            <Route path="updatecategory/:id" element={<Protected Cmp={UpdateCategory} />} />
            <Route path="categorylist" element={<Protected Cmp={CategoryList} />} />

            <Route path="addproduct" element={<Protected Cmp={AddProduct} />} />
            <Route exact path="productlist/updateproduct/:id" element={<Protected Cmp={UpdateProduct} />} />
            <Route path="productlist" element={<Protected Cmp={ProductList} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
