import React, {useState} from "react";

function ComplaintsForm()
{
  const [Headline, setHeadline] = useState("");
  const [Message, setMessage] = useState("");
  const [Status, setStatus] = useState("");
 
  const handleSubmit=()=>
    {
      
      if(Headline=== ""){
        alert("Headline is required")
      }
      else if(Message=== ""){
        alert("Message is required")
      }
      else if(Status=== ""){
        alert("Status is required")
      }
     else{
    localStorage.setItem("Headline",Headline);
    localStorage.setItem("Message",Message);
    localStorage.setItem("Status",Status);
    
    alert('user saved!');
  }
  }

    return(
        <div class="form">
            <div class="headline">
            <label>Headline*</label>
            <input type="text" id="headline"   onChange = {(e) => setHeadline(e.target.value)} placeholder="Enter Headline"/>
            </div><br></br>
            <div class="message">
            <label>Message*</label>
            <textarea type="text" id="message"  onChange = {(e) => setMessage(e.target.value)}placeholder="Enter message"/>
            </div><br></br>
            <div class="status">
            <label>Status*</label>
            <select onChange = {(e) => setStatus(e.target.value)} id="status">
            <option value="set status" id="status">set status..</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            </select>
            </div>
            <button onClick={()=>handleSubmit()} type="submit" id="btn">Submit</button>
        </div>
    );

}
export default ComplaintsForm;