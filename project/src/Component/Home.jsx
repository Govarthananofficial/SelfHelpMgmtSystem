import React from 'react'
import './Home.css';
import { FaUser } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa'
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { HiCurrencyRupee } from 'react-icons/hi';
import { FaUserPlus } from 'react-icons/fa';
function Home() {
  
    return (
      <div class="home">
      
        <div id="home1"><span id="user1"><FaUser/></span>Users</div>
        <div  id="home2"><span id="user1"><FaCommentDots/></span>Complaints</div>
        <div id="home3"><span id="user1"><FaComments/></span>Comments</div>
        <div id="home4"><span id="user1"><FaUsers/></span><br></br>Staff</div>
        <div id="home5"><span id="user1"><BsFillCalendarEventFill/></span><br></br>Events</div>
        <div id="home6"><span id="user1"><HiCurrencyRupee/></span><br></br>Loan</div>
        <div id="home7"><span id="user1"><FaUserPlus/></span><br></br>Member</div>
      </div>
    )
  
}

export default Home;
