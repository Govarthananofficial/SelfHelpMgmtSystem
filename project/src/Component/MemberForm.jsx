import { useState } from "react";
function MemberForm()
{
    const [Name, setName] = useState("");
  const [Identification, setIdentification] = useState("");
  const [Date, setDate] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [Town, setTown] = useState("");
  const [MarritalStatus, setMarritalStatus] = useState("");
  const [Status, setStatus] = useState("");
  const [Datejoin, setDatejoin] = useState("");
  
  const handleSubmit=()=>
    {
      
      if(Name=== ""){
        alert("Name is required")
      }
      else if(Identification=== ""){
        alert("Identification is required")
      }
      else if(Date=== ""){
        alert("Date is required")
      }
      else if(Gender=== ""){
        alert("Gender is required")
      }
      else if(Address=== ""){
        alert("Address is required")
      }
      else if(Town=== ""){
        alert("Town is required")
      }
      else if(MarritalStatus=== ""){
        alert("MarritalStatus is required")
      }
      else if(Status=== ""){
        alert("Status is required")
      }
      else if(Datejoin=== ""){
        alert("Datejoin is required")
      }
      else{
    localStorage.setItem("Name",Name);
    localStorage.setItem("Identification",Identification);
    localStorage.setItem("Date",Date);
    localStorage.setItem("Gender",Gender);
    localStorage.setItem("Address",Address);
    localStorage.setItem("Town",Town);
    localStorage.setItem("MarritalStatus",MarritalStatus);
    localStorage.setItem("Status",Status);
    localStorage.setItem("Datejoin",Datejoin);
    alert('user saved!');
  }
  }
    return(
        <div class="from">
          <h2 id="new6">New Member</h2><br></br>
            <div class="Name"> 
            <label>Name*</label>
                <input type="text" id="Name" onChange = {(e) => setName(e.target.value)}  placeholder="Enter name"/>
            </div><br/>
            <div class="Identification">
                <label>Identification*</label> 
                <input type="text" id="Identifications" onChange = {(e) => setIdentification(e.target.value)}  placeholder="Enter identification"/>
            </div><br/>
            <div class="date4">
                <label>Date*</label> 
                <input type="date" id="date" onChange = {(e) => setDate(e.target.value)}  placeholder="Enter date"/>
            </div><br/>
            <div class="gender">
                <label>Gender*</label>
                <div class="Type" onChange = {(e) => setGender(e.target.value)}>
                <input type="radio" id="Gender"   name="gender"  value="Male" defaultChecked={Gender==="Male"}/>Male
                <input type="radio" id="Gender" name="gender" value="Female" defaultChecked={Gender==="Female"}   />Female
                </div>
            </div><br/>
            <div class="Address">
                <label>Address*</label> 
                <input type="text" id="Addres" onChange = {(e) => setAddress(e.target.value)}  placeholder="Enter Address"/>
            </div><br/>
            <div class="Town">
                <label>Town*</label> 
                <input type="text" id="Town" onChange = {(e) => setTown(e.target.value)}  placeholder="Enter Town"/>
            </div><br/>
            <div class="Marritalstatus">
                <label>Marrital Status*</label> 
                <select id="MarritalStatus" onChange = {(e) => setMarritalStatus(e.target.value)} >
                <option value="select a value">Select a value..</option>
                <option value="married">married</option>
                <option value="single">single</option>
            </select>
            </div><br/>
            <div class="Status">
                <label> Status*</label> 
                <input type="text" id="Status" onChange = {(e) => setStatus(e.target.value)}  placeholder="Enter status"/>
            </div><br/>
            <div class="Datejoin">
                <label>Datejoin*</label> 
                <input type="date" onChange = {(e) => setDatejoin(e.target.value)}  id="Datejoin" />
            </div><br/>
            <button onClick={()=>handleSubmit()} type="submit" id="Btn4">Submit</button>

        </div>
    );
}
export default MemberForm;