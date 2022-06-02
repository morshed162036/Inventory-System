import React, { useState, useEffect } from "react";

import { Table } from "react-bootstrap";
import axios from "axios";
import Header from "../component/header";
function ProductList() {
  const url = "http://localhost:8000/api/productlist";
  const [data, setData] = useState([]);

  //   useEffect(async () => {
  //     //let result = await fetch("http://localhost:8000/api/productlist");
  //     //result = await result.json();
  //     //setData(result);
  //   }, []);
  // useEffect(async () => {
  //   let result = await fetch("http://localhost:8000/api/productlist");
  //   result = await result.json();
  //   setData(result);
  // });
  // console.log(data);
  useEffect(() => {
    viewData();
  }, []);

  function deletes(id) {
    let urls = `http://localhost:8000/api/productdelete/${id}`;
    axios.delete(urls).then((response) => {
      let result = response.data;
    });
    viewData();
  }
  function viewData() {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }

  return (
    <>
      <Header />
      <div>Product List</div>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product Img</th>
              <th>Product Desc</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>

          {data.map((item) => (
            <tbody>
              <tr>
                <td>{item.product_id}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    style={{ width: 100 }}
                    src={"http://localhost:8000/" + item.file_path}
                  />
                </td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>
                  <button style={{ marginRight: 15 }}>Edit</button>

                  <button onClick={() => deletes(item.product_id)}>
                    Delete
                  </button>
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
