import React from "react";
import {  Link, Outlet } from 'react-router-dom';

import Searchbar from "./Searchbar";
function Staff()
{

return(
<nav>
<div class="user">
<div class="head">
<Link id="head"  to="/staff/stafflist">Staff</Link>
<div id="Linked">
<Link id="linked" to="/staff/staffform" >+ Add New Staff</Link>
</div>
<Searchbar />
<Outlet />
</div>
</div>
</nav>

);

}
export default Staff;