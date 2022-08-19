import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import Header from "../component/header";
function AddProducts() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCat] = useState("");
  const [quantity , setQnt] = useState("");
  const [file, setFile] = useState("");

  async function add() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("desc", desc);

    let result = await fetch("http://localhost:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });
    result = await result.json();
    if (result.name !== "undefined" && result.name != null) {
      alert("Data has been saved");
      setName("");
      setDesc('');
      setPrice('');
      setFile('');
      setCat('');
      setQnt('');
      navigate("/productlist");
    }
  }
  return (
    <div>
      <Header />
      <h1>AddProducts page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="Product Name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product Category"
          className="form-control"
          value={category}
          onChange={(e) => setCat(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product Description"
          className="form-control"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product price"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Product quantity"
          className="form-control"
          value={quantity}
          onChange={(e) => setQnt(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button className="btn btn-primary" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
}
export default AddProducts;
