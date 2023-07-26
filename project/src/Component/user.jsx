import React from "react";
import {  Outlet,Link } from 'react-router-dom';
import Searchbar from "./Searchbar";
function User()
{
    
return(
<nav>
<div class="user">
<div class="head">
<Link id="head" to="/dashboard/user/userlist">Users</Link>
<div id="Linked">
<Link id="link" to="/dashboard/user/userform" >+ Add New User</Link>
</div>
<Searchbar/>
<Outlet />
</div>
</div>
</nav>

);

}
export default User;
