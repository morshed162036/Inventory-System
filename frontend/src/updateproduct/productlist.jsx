import React, { useState, useEffect } from "react";
import Header from "../component/header";
function ProductList() {
  const [data, setData] = useState([]);

  //   useEffect(async () => {
  //     //let result = await fetch("http://localhost:8000/api/productlist");
  //     //result = await result.json();
  //     //setData(result);
  //   }, []);
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/api/productlist");
    result = await result.json();
    setData(result);
  });
  console.log(data);
  return (
    <>
      <Header />
      <div>Product List</div>
    </>
  );
}

export default ProductList;
