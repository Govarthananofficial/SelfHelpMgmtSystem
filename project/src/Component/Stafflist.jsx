import React from "react";
const Stafflist=()=>
{
    return(
<div class="stafflist">
    <p>
        Name:{""}
        {localStorage.getItem("Name")
        ?localStorage.getItem("Name")
    :"NA"}
    </p><br></br>
    <p>
    Position:{""}
        {localStorage.getItem("Position")
        ?localStorage.getItem("Position")
    :"NA"}
    </p><br></br>
    <p>
    Datejoin:{""}
        {localStorage.getItem("Datejoin")
        ?localStorage.getItem("Datejoin")
    :"NA"}
    </p><br></br>
    <p>
        Status:{""}
        {localStorage.getItem("Status")
        ?localStorage.getItem("Status")
    :"NA"}
    </p><br></br>
    <p>
    Introduction:{""}
        {localStorage.getItem("Introduction")
        ?localStorage.getItem("Introduction")
    :"NA"}
    </p>
    
    
</div>

    );
}
export default Stafflist;