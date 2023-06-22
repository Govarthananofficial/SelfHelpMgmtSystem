import React from "react";
const Memberlist=()=>
{
    return(
<div class="memberlist">
    <p>
        Name:{""}
        {localStorage.getItem("Name")
        ?localStorage.getItem("Name")
    :"NA"}
    </p><br></br>
    <p>
        Identification:{""}
        {localStorage.getItem("Identification")
        ?localStorage.getItem("Identification")
    :"NA"}
    </p><br></br>
    <p>
    Date:{""}
        {localStorage.getItem("Date")
        ?localStorage.getItem("Date")
    :"NA"}
    </p><br></br>
    <p>
    Gender:{""}
        {localStorage.getItem("Gender")
        ?localStorage.getItem("Gender")
    :"NA"}
    </p><br></br>
    <p>
    Address:{""}
        {localStorage.getItem("Address")
        ?localStorage.getItem("Address")
    :"NA"}
    </p><br></br>
    <p>
    Town:{""}
        {localStorage.getItem("Town")
        ?localStorage.getItem("Town")
    :"NA"}
    </p> <br></br>
    <p>
    Marrital Status:{""}
        {localStorage.getItem("MarritalStatus")
        ?localStorage.getItem("MarritalStatus")
    :"NA"}
    </p> <br></br>
    <p>
    Status:{""}
        {localStorage.getItem("Status")
        ?localStorage.getItem("Status")
    :"NA"}
    </p> <br></br>
    <p>
    Datejoin:{""}
        {localStorage.getItem("Datejoin")
        ?localStorage.getItem("Datejoin")
    :"NA"}
    </p>
    
    </div>

    );
}
export default Memberlist;