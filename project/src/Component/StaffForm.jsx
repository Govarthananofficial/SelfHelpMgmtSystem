import React, {useState} from "react";
function StaffForm()
{
  const [Name, setName] = useState("");
  const [Position, setPosition] = useState("");
  const [Datejoin, setDatejoin] = useState("");
  const [Status, setStatus] = useState("");
  const [Introduction, setIntroduction] = useState("");
 
  const handleSubmit=()=>
    {
      
      if(Name=== ""){
        alert("Name is required")
      }
      else if(Position=== ""){
        alert("Position is required")
      }
      else if(Datejoin=== ""){
        alert("Datejoin is required")
      }
      else if(Status=== ""){
        alert("Status is required")
      }
      else if(Introduction=== ""){
        alert("Introduction is required")
      }
     else{
    localStorage.setItem("Name",Name);
    localStorage.setItem("Position",Position);
    localStorage.setItem("Datejoin",Datejoin);
    localStorage.setItem("Status",Status);
    localStorage.setItem("Introduction",Introduction);
    alert('user saved!');
  }
  }
    return(
        <div id="form">
          <h2 id="new3">New Staff</h2><br></br>
            <div class="name">
            <label>Name*</label>
            <input type="text" id="Name" onChange = {(e) => setName(e.target.value)} placeholder="Enter name"/>
            </div><br></br>
            <div class="position">
            <label>Position*</label>
            <input type="text" id="Position" onChange = {(e) => setPosition(e.target.value)} placeholder="Enter position"/>
            </div><br></br>
            <div class="datejoin">
            <label>Datejoin*    </label>
            <input type="date" id="DateJoin" onChange = {(e) => setDatejoin(e.target.value)} />
            </div><br></br>
            <div class="statuss" >
            <label>Status*</label>
            <select  id="Statuss" onChange = {(e) => setStatus(e.target.value)}>
            <option value="set status" id="statuss">set status..</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            </select>
            </div><br></br>
            <div class="introduction">
            <label>Introduction*</label>
            <textarea type="text" id="Introduction" onChange = {(e) => setIntroduction(e.target.value)} placeholder="Enter introduction"/>
            </div>
            <button onClick={()=>handleSubmit()} type="submit" id="btn2">Submit</button>
        </div>
    );

}
export default StaffForm;