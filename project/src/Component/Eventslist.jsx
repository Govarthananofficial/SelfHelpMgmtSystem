import React from "react";
const Eventslist=()=>
{
    return(
<div class="eventslist">
    <p>
        Headline:{""}
        {localStorage.getItem("Headline")
        ?localStorage.getItem("Headline")
    :"NA"}
    </p><br></br>
    <p>
        Title:{""}
        {localStorage.getItem("Title")
        ?localStorage.getItem("Title")
    :"NA"}
    </p><br></br>
    <p>
        Content:{""}
        {localStorage.getItem("Content")
        ?localStorage.getItem("Content")
    :"NA"}
    </p><br></br>
    <p>
      Message:{""}
        {localStorage.getItem("Message")
        ?localStorage.getItem("Message")
    :"NA"}
    </p><br></br>
    <p>
       Venue:{""}
        {localStorage.getItem("Venue")
        ?localStorage.getItem("Venue")
    :"NA"}
    </p><br></br>
    <p>
      Date:{""}
        {localStorage.getItem("Date")
        ?localStorage.getItem("Date")
    :"NA"}
    </p> 
    
</div>

    );
}
export default Eventslist;