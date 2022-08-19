import React, { useState, useEffect } from "react";

import { Table } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../component/header";
function ProductList() {
  const url = "http://localhost:8000/api/productlist";
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    viewData();
  }, []);

  function deletes(id) {
    let urls = `http://localhost:8000/api/productdelete/${id}`;
    axios.delete(urls).then((response) => {
      //let result = response.data;
    });
    viewData();
  }
  function viewData() {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }
  function addLink(){
    navigate("/addproduct");
  }

  return (
    <>
      <Header />
      <div><h2>Product List</h2></div>
      <button className="btn btn-primary" onClick={addLink}>
      Add Product
      </button>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Img</th>
              <th>Product Desc</th>
              <th>Product Price</th>
              <th>Product Quantity </th>
              <th>Action</th>
            </tr>
          </thead>

          {data.map((item) => (
            <tbody>
              <tr>
                <td>{item.product_id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <img
                    style={{ width: 100 }}
                    src={"http://localhost:8000/" + item.file_path}
                    alt="product img"
                  />
                </td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <Link to={`updateproduct/${item.product_id}`}>
                    <span className="update">Edit</span>
                  </Link>
                    <span className="delete" onClick={() => deletes(item.product_id)}>Delete</span>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
}

export default ProductList;
