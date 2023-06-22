import React from "react";
import {  Outlet,Link } from 'react-router-dom';
import Searchbar from "./Searchbar";
function User()
{
    
return(
<nav>
<div class="user">
<div class="head">
<Link id="head" to="/user/userlist">Users</Link>

<div id="Linked">
<Link id="link" to="/user/userform" >+ Add New User</Link>
</div>
<Searchbar/>
<Outlet />
</div>
</div>
</nav>

);

}
export default User;
