import React from "react";
import {  Outlet,Link } from 'react-router-dom';
import './Complaints.css';
function Complaints()
{

return(
<nav>
<div class="user">
<div class="head">
<Link id="head" to="/dashboard/complaints/complaintslist">Complaints</Link>
<div id="Linked">
<Link id="linked1" to="/dashboard/complaints/complaintsform" >+ Add New Complaints</Link>
</div>
<Outlet />
</div>
</div>
</nav>

);

}
export default Complaints;