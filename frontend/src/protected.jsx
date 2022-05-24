import React, {useState, useEffect} from "react";

import { useNavigate } from "react-router-dom";

import Header from "./component/header";

function Protected(props)
{
    let Cmp = props.Cmp;
    let navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            navigate("/register", { replace: true });
        }
    })
    return(
        <div>
            <Cmp />
        </div>
    )
}
export default Protected