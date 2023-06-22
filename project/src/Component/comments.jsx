import React from "react";
import {  Link, Outlet } from 'react-router-dom';
import Searchbar from "./Searchbar";
function Comments()
{
return(
<nav>
<div class="user">
<div class="head">
<Link id="head" to="/comments/commentslist">Comment</Link>
<div id="Linked">
<Link id="linked" to="/comments/commentsform">+ Add New Comment</Link>
</div>
<Searchbar />
<Outlet />
</div>
</div>
</nav>
);
}
export default Comments;