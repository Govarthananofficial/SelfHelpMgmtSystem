import React from "react";
import {  Link, Outlet } from 'react-router-dom';
import './Comments.css';
function Comments()
{
return(
<nav>
<div class="user">
<div class="head">
<Link id="head" to="/dashboard/comments/commentslist">Comment</Link>
<div id="Linked">
<Link id="linked2" to="/dashboard/comments/commentsform">+ Add New Comment</Link>
</div>
<Outlet />
</div>
</div>
</nav>
);
}
export default Comments;