import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Table } from "react-bootstrap";
import axios from "axios";
import Header from "../component/header";
function CategoryList() {
  const url = "http://localhost:8000/api/categorylist";
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    viewData();
  }, []);

  function deletes(id) {
    let urls = `http://localhost:8000/api/categorydelete/${id}`;
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
    navigate("/addcategory");
  }

  return (
    <>
      <Header />
      <div><h2>Category List</h2></div>
      <button className="btn btn-primary" onClick={addLink}>
      Add Category
      </button>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>

          {data.map((item) => (
            <tbody>
              <tr>
                <td>{item.category_id}</td>
                <td>{item.name}</td>
                <td>
                  <button style={{ marginRight: 15 }}>Edit</button>

                  <button onClick={() => deletes(item.category_id)}>
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

export default CategoryList;