import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import './LoginPage.css';

const LoginPage =()=>
{
    const navigate=useNavigate();
    const[Username,setUsername]=useState("");
    const[Password,setPassword]=useState("");
    const handleSubmit=(e)=>
    {
e.preventDefault();
if(Username === "Rajeswari"  && Password === "rajeammu")
{
    alert("login success")
    navigate('/dashboard')
}else{
    alert("invalid username or password")
}
    }
    return(
        <div id="Container">
            
        <form id="form-control" >
            <h1>Self Help Management System </h1><br></br>
            <div>
            <label id="user">Username:</label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} id="username" required />
            </div>
            <br></br>
            <div >
            <label>Password:</label>
            <input type="text" onChange={(e)=>setPassword(e.target.value)} id="word" required />
            </div>
            <br></br>
            <div>
                <p>Don't Have An Account? <span><Link to="/signup" id="sign">SignUp</Link></span></p>
                
            </div>
            <br></br>
            <button id="submit" onClick={handleSubmit} >Login</button>
            <br></br>
        </form>

        </div>
    );
}
export default LoginPage;
