
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import './LoginPage.css';

const Signup =()=>
{
    const navigate=useNavigate();
    const[Username,setUsername]=useState("");
    const[Password,setPassword]=useState("");
    const[ConfirmPassword,setConfirmPassword]=useState("");
    const handleSubmit=(e)=>
    {
e.preventDefault();
if(Username === "Anusiya"  && Password === "anukeerthi" && ConfirmPassword ==="anukeerthi")
{
    alert("login success")
    navigate('/dashboard')
}   }
    return(
        <div id="Container">
            
        <form id="form-Control" >
            <h2>SignUp </h2><br></br>
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
            <label>Confirm Password:</label>
            <input type="text" onChange={(e)=>setConfirmPassword(e.target.value)} id="confirm" required />
            </div>
            <br></br>
            <div>
                <p>Already Have An Account? <span><Link to="/" id="sign">SignIn</Link></span></p>
                
            </div>
            <br></br>
            <button id="submit" onClick={handleSubmit} >Login</button>
            <br></br>
        </form>

        </div>
    );
}
export default Signup;

