
import { Routes,Route, Outlet } from 'react-router-dom';
import './App.css';
import Dashboard from './Component/Dashboard';
import LoginPage from './Component/LoginPage';
import User from './Component/user';
import Userlist from './Component/Userlist';
import UserForm from './Component/UserForm';
import Complaintslist from './Component/Complaintslist';
import ComplaintsForm from './Component/ComplaintsForm';
import Comments from './Component/comments';

import Commentslist from './Component/Commentslist';
import CommentForm from './Component/CommentForm';
import Staff from './Component/Staff';
import Stafflist from './Component/Stafflist';
import StaffForm from './Component/StaffForm';
import Events from './Component/events';
import Eventslist from './Component/Eventslist';
import EventForm from './Component/EventForm';
import Loan from './Component/loan';
import Loanlist from './Component/Loanlist';
import LoanForm from './Component/LoanForm';
import Member from './Component/member';
import Memberlist from './Component/Memberlist';
import MemberForm from './Component/MemberForm';
import Complaints from './Component/complaints';
import Signup from './Component/Signup';

function App() {
  return (
    <div>
    <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard/>} >
        <Route path='user' element={< User />} >
        <Route path="userlist" element={< Userlist />}/>
        <Route path="userform" element={<UserForm />}/>
        </Route>
        <Route exact path='complaints' element={< Complaints />}>
<Route exact path="complaintslist" element={<Complaintslist />}/>
<Route exact path="complaintsform" element={<ComplaintsForm />}/>
</Route>
<Route exact path='comments' element={< Comments />}>
<Route exact path="commentslist" element={<Commentslist />}/>
<Route exact path="commentsform" element={<CommentForm />}/>
</Route>
<Route exact path='staff' element={< Staff />}>
<Route exact path="stafflist" element={<Stafflist/>}/>
<Route exact path="staffform" element={<StaffForm/>}/>
</Route>
<Route exact path='events' element={< Events />}>
<Route exact path="eventslist" element={<Eventslist />}/>
<Route exact path="eventsform" element={<EventForm />}/>
</Route>
<Route exact path='loan' element={< Loan />}>
<Route exact path="loanlist" element={<Loanlist />}/>
<Route exact path="loanform" element={<LoanForm />}/>
</Route>
<Route exact path='member' element={< Member />}>
<Route exact path="memberlist" element={<Memberlist />}/>
<Route exact path="memberform" element={<MemberForm />}/>

</Route>
  </Route>
  </Routes> 

        
    </div>
  );
}

export default App;
