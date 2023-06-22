import React from "react";
import {  Outlet,Link } from 'react-router-dom';
import Searchbar from "./Searchbar";
function User()
{

return(
<nav>
<div class="user">
<div class="head">
<Link id="head" to="/complaints/complaintslist">Complaints</Link>
<div id="Linked">
<Link id="linked" to="/complaints/complaintsform" >+ Add New Complaints</Link>
</div>
<Searchbar/>
<Outlet />
</div>
</div>
</nav>

);

}
export default User;