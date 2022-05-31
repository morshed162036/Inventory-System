import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

//import Header from "./component/header";

function Protected(props) {
  let Cmp = props.Cmp;
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login", { replace: true });
    }
  });
  return (
    <div>
      <Cmp />
    </div>
  );
}
export default Protected;
