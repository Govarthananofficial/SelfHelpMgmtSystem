import React from "react";
import {  Link, Outlet } from 'react-router-dom';
import Searchbar from "./Searchbar";
function Loan()
{
    
return(
<nav>
<div class="user">
<div class="head">
<Link id="head" to="/dashboard/loan/loanlist">Loan</Link>
<div id="Linked">
<Link id="linked5" to="/dashboard/loan/loanform" >+ Add New Loan</Link>
</div>
<Searchbar />
<Outlet />
</div>
</div>
</nav>
);
}
export default Loan;