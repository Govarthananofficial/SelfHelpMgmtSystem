import React from "react";
const Commentslist=()=>
{
    return(
<div class="commentslist">
<h2 id="first">Comments</h2><br></br>
    <p>
        Comments:{""}
        {localStorage.getItem("Comments")
        ?localStorage.getItem("Comments")
    :"NA"}
    </p>
    
    
    
</div>

    );
}
export default Commentslist;