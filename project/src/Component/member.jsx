import React from "react";
import {  Link, Outlet } from 'react-router-dom';
import Searchbar from "./Searchbar";
function Member()
{
return(

<div class="user">
<div class="head">
<Link id="head" to="/member/memberlist">Member</Link>
<div id="Linked">
<Link id="linked" to="/member/memberform" >+ Add New Member</Link>
</div>
<Searchbar/>
<Outlet />
</div>
</div>


);
}
export default Member;