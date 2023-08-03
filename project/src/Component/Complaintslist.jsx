import React from "react";
const Complaintslist=()=>
{
    return(
<div class="complaintslist">
<h2 id="first">Complaints</h2><br></br>
    <p>
        Headline:{""}
        {localStorage.getItem("Headline")
        ?localStorage.getItem("Headline")
    :"NA"}
    </p><br></br>
    <p>
        Message:{""}
        {localStorage.getItem("Message")
        ?localStorage.getItem("Message")
    :"NA"}
    </p><br></br>
    <p>
        Status:{""}
        {localStorage.getItem("Status")
        ?localStorage.getItem("Status")
    :"NA"}
    </p>
    
    
</div>

    );
}
export default Complaintslist;