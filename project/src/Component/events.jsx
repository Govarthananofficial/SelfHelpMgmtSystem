import React from "react";
import {  Link, Outlet } from 'react-router-dom';
import './Events.css';
function Event()
{
    
return(
<nav>
<div class="user">
<div class="head">
<Link id="head" to="/dashboard/events/eventslist">Events</Link>
<div id="Linked">
<Link id="linked4" to="/dashboard/events/eventsform" >+ Add New Events</Link>
</div>

<Outlet />
</div>

</div>
</nav>
);
}
export default Event;