import React, { useState } from "react";
import Header from "../component/header";
function AddProducts() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");

  async function add() {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("desc", desc);

    let result = await fetch("http://localhost:8000/api/addproduct", {
      method: 'POST',
      body: formData
    });
    alert("Data has been saved");
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
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product Description"
          className="form-control"
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product price"
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
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
