import React, {useState}  from 'react';

function UserForm()
 {

const [Firstname, setFirstname] = useState("");
const [Lastname, setLastname] = useState("");
const [Email, setEmail] = useState("");
const [Password, setPassword] = useState("");
const [Confirmpassword, setConfirmpassword] = useState("");
const handleSubmit=(e)=>
  {
    e.preventDefault();
    if(Firstname=== ""){
      alert("Firstname is required")
    }
    else if(Lastname=== ""){
      alert("Lastname is required")
    }
    else if(Email=== ""){
      alert("Email is required")
    }
    else if(Password=== ""){
      alert("Password is required")
    }
    else if(Confirmpassword=== ""){
      alert("Confirmpassword is required")
    }else{
  localStorage.setItem("Firstname",Firstname);
  localStorage.setItem("Lastname",Lastname);
  localStorage.setItem("Email",Email);
  localStorage.setItem("Password",Password);
  localStorage.setItem("Confirmpassword",Confirmpassword);
  alert('user saved!');
  
}
}


  
return(
<div class="form">
<div>
<div class="username">
<label>First Name* </label>
<input type="text" id="FirstName" onChange = {(e) => setFirstname(e.target.value)}  placeholder="First Name"/>
</div><br></br>
<div class="lastname">
<label>Last Name* </label>
<input  type="text"  id="LastName" onChange = {(e) => setLastname(e.target.value)}    placeholder="LastName"/>
</div><br></br>
<div class="email">
<label>Email* </label>
<input  type="email" id="Email" onChange = {(e) => setEmail(e.target.value)} placeholder="Email"/>
</div><br></br>
<div class="password">
<label >Password* </label>
<input  type="password"  id="Password" onChange = {(e) => setPassword(e.target.value)} placeholder="Password"/>
</div><br></br>
<div class="confirm-password">
<label>Confirm Password* </label>
<input  type="password" id="ConfirmPassword" onChange = {(e) => setConfirmpassword(e.target.value)} placeholder="Confirm Password"/>
</div><br></br>
</div>
<button onClick={handleSubmit} type="submit" class="btn">Submit</button>
</div>

)       
}
export default UserForm;



