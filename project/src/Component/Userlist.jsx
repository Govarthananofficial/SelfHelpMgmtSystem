import React from "react";
const Userlist=()=>
{
    return(
<div class="userlist">
    <h2 id="first">Users</h2><br></br>
    <p>
        First Name:{""}
        {localStorage.getItem("Firstname")
        ?localStorage.getItem("Firstname")
    :"NA"}
    </p><br></br>
    <p>
        Last Name:{""}
        {localStorage.getItem("Lastname")
        ?localStorage.getItem("Lastname")
    :"NA"}
    </p><br></br>
    <p>
        Email:{""}
        {localStorage.getItem("Email")
        ?localStorage.getItem("Email")
    :"NA"}
    </p><br></br>
    <p>
      Password:{""}
        {localStorage.getItem("Password")
        ?localStorage.getItem("Password")
    :"NA"}
    </p><br></br>
    <p>
        Confirm Password:{""}
        {localStorage.getItem("Confirmpassword")
        ?localStorage.getItem("Confirmpassword")
    :"NA"}
    </p>
    
    
</div>

    );
}
export default Userlist;