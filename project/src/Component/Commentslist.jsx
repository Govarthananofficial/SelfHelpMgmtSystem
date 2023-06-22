import React from "react";
const Commentslist=()=>
{
    return(
<div class="commentslist">
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