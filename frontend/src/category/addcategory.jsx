import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import Header from "../component/header";
function AddCategory() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function add() {
    const formData = new FormData();
    formData.append("name", name);

    let result = await fetch("http://localhost:8000/api/addcategory", {
      method: "POST",
      body: formData,
    });
    result = await result.json();
    if (result.name !== "undefined" && result.name != null) {
      alert("Data has been saved");
      setName("");
      navigate("/categorylist");
    }
  }
  return (
    <div>
      <Header />
      <h1>AddCategory page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="Category Name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button className="btn btn-primary" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
}
export default AddCategory;
