import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Complaints from './complaints';
import './Dashboard.css';
import User from './user';
import Comments from './comments';
import Staff from './Staff';
import Events from './events';
import Loan from './loan';
import Member from './member';
import { SiPassport } from 'react-icons/si';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa'
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { HiCurrencyRupee } from 'react-icons/hi';
import { FaUserPlus } from 'react-icons/fa';
import { BsJustify } from 'react-icons/bs';
import UserForm from './UserForm';
import ComplaintsForm from './ComplaintsForm';
import CommentForm from './CommentForm';
import StaffForm from './StaffForm';
import EventForm from './EventForm';
import LoanForm from './LoanForm';
import MemberForm from './MemberForm';
import Userlist from './Userlist';
import Complaintslist from './Complaintslist';
import Commentslist from './Commentslist';
import Stafflist from './Stafflist';
import Eventslist from './Eventslist';
import Loanlist from './Loanlist';
import Memberlist from './Memberlist';
function Dashboard() {
    const [navCollapse,setNavCollapse] = useState(false);

return (
<div class="container">
 <div class="header">
<div id="header">
<SiPassport/>System Portal  
<BsJustify onClick={e=>setNavCollapse(!navCollapse)} />
</div>
</div>
<div class={`sidebar ${navCollapse? "navCollapse" : ""}`}>
<nav>
    
<ul ><br/><br/>

<li >
<Link  to="/"><FaHome/></Link>
<h4> Home</h4>
</li><br/>

<li >
<Link  to="/user"><FaUser/></Link>
<h4> User</h4>
</li><br/>

<li >
<Link  to="/complaints"><FaCommentDots/></Link>
<h4> Complaints</h4>
</li><br/>

<li >
<Link  to="/comments"><FaComments/></Link>
<h4>Comments</h4>
</li><br/>

<li >
<Link  to="/staff"><FaUsers/></Link>
<h4> Staff</h4>
</li><br/>

<li>
<Link  to="/events"><BsFillCalendarEventFill/></Link>
<h4> Events</h4>
</li><br/>

<li >
<Link  to="/loan"><HiCurrencyRupee/></Link>
<h4> Loan</h4>
</li><br/>

<li>
<Link  to="/member"><FaUserPlus/></Link>
<h4> Member</h4>
</li>
</ul>
</nav>
</div>

<Routes>
    
<Route exact path='/user' element={< User />}>
<Route exact path="userlist" element={< Userlist />}/>
<Route exact path="userform" element={<UserForm />}/>
</Route>
<Route exact path='/complaints' element={< Complaints />}>
<Route exact path="complaintslist" element={<Complaintslist />}/>
<Route exact path="complaintsform" element={<ComplaintsForm />}/>
</Route>
<Route exact path='/comments' element={< Comments />}>
<Route exact path="commentslist" element={<Commentslist />}/>
<Route exact path="commentsform" element={<CommentForm />}/>
</Route>
<Route exact path='/staff' element={< Staff />}>
<Route exact path="stafflist" element={<Stafflist/>}/>
<Route exact path="staffform" element={<StaffForm />}/>
</Route>
<Route exact path='/events' element={< Events />}>
<Route exact path="eventslist" element={<Eventslist />}/>
<Route exact path="eventsform" element={<EventForm />}/>
</Route>
<Route exact path='/loan' element={< Loan />}>
<Route exact path="loanlist" element={<Loanlist />}/>
<Route exact path="loanform" element={<LoanForm />}/>
</Route>
<Route exact path='/member' element={< Member />}>
<Route exact path="memberlist" element={<Memberlist />}/>
<Route exact path="memberform" element={<MemberForm />}/>

</Route>
</Routes>
</div>
);
}
export default Dashboard;


