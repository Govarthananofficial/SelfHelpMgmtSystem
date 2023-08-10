import React  from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';                 

import { SiPassport } from 'react-icons/si';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa'
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { HiCurrencyRupee } from 'react-icons/hi';
import { FaUserPlus } from 'react-icons/fa';


function Dashboard() {
    

return (
    <>
<div class="container">
 <div class="header">
<div id="header">
<SiPassport/>System Portal  

</div>
</div>
<div class="sidebar">
<nav>
    
<ul ><br/>

<li >
<Link to="/dashboard/home"><FaHome/><h4> Home</h4></Link>

</li><br/><br/>

<li >
<Link  to="/dashboard/user"><FaUser/> <h4>User</h4></Link>    
</li><br/><br/>

<li >
<Link  to="/dashboard/complaints"><FaCommentDots/> <h4>Complaints</h4></Link>
</li><br/><br/>

<li >
<Link  to="/dashboard/comments"><FaComments/> <h4>Comments</h4></Link>
</li><br/><br/>

<li >
<Link  to="/dashboard/staff"><FaUsers/><h4> Staff</h4></Link>

</li><br/><br/>

<li>
<Link  to="/dashboard/events"><BsFillCalendarEventFill/><h4> Events</h4></Link>

</li><br/><br/>

<li >
<Link  to="/dashboard/loan"><HiCurrencyRupee/><h4> Loan</h4></Link>

</li><br/><br/>

<li >
    
<Link id="plus" to="/dashboard/member"><FaUserPlus/><h4> Member</h4></Link>

</li>
</ul>
</nav>

</div>
<Outlet/>

</div>
</>
);
}
export default Dashboard;


