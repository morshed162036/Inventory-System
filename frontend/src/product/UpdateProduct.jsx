import React, {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Header from "../component/header";
function UpdateProduct(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCat] = useState("");
  const [quantity , setQnt] = useState("");
  const [file, setFile] = useState("");
  console.warn("props",props.match.params.id);
  
 
  useEffect(() => {
    viewData();
  }, []);

  function viewData() {
    //const url="http://localhost:8000/api/product/"+props.match.params.id;
    axios.get("http://localhost:8000/api/product/"+props.match.params.id).then((response) => {
      setData(response.data);
      setName(response.data.name);
      setDesc(response.data.desc);
      setPrice(response.data.price);
      setCat(response.data.category);
      setQnt(response.data.quantity);
      setFile(response.data.file);
    });
  }
  async function update() { 
    const urls=`http://localhost:8000/api/productupdate/${props.match.id}`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("desc", desc);

    let result = await fetch(urls, {
      method: "POST",
      body: formData,
    });
    result = await result.json();
    if (result.name !== "undefined" && result.name != null) {
      alert("Data has been updated");
      navigate("/productlist");}
  }
  return (
    <div>
      <Header />
      <h1>UpdateProduct page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="Product Name"
          className="form-control"
          defaultValue={data.name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product Category"
          className="form-control"
          defaultValue={data.category}
          onChange={(e) => setCat(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product Description"
          className="form-control"
          defaultValue={data.desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Product price"
          className="form-control"
          defaultValue={data.price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Product quantity"
          className="form-control"
          defaultValue={data.quantity}
          onChange={(e) => setQnt(e.target.value)}
        />
        <br />
        <input
          type="file"
          defaultValue={data.file_path}
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img src={"http://localhost:8000/"+data.file_path} alt="" style={{width:100}}/>
        <br />
        <button className="btn btn-primary" onClick={update(data.product_id)}>
          Update
        </button>
      </div>
    </div>
  )
}
export default UpdateProduct;
