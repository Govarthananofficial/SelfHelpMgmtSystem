import React, {useState} from "react";
function EventForm()
{
  const [Headline, setHeadline] = useState("");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Message, setMessage] = useState("");
  const [Venue, setVenue] = useState("");
  const [Date, setDate] = useState("");
  const handleSubmit=()=>
    {
      
      if(Headline=== ""){
        alert("Headline is required")
      }
      else if(Title=== ""){
        alert("Title is required")
      }
      else if(Content=== ""){
        alert("Content is required")
      }
      else if(Message=== ""){
        alert("Message is required")
      }
      else if(Venue=== ""){
        alert("Venue is required")
      }
      else if(Date=== ""){
        alert("Date is required")
      }else{
    localStorage.setItem("Headline",Headline);
    localStorage.setItem("Title",Title);
    localStorage.setItem("Content",Content);
    localStorage.setItem("Message",Message);
    localStorage.setItem("Venue",Venue);
    localStorage.setItem("Date",Date);
    alert('user saved!');
  }
  }

    return(
        <div id="Form">
          <h2 id="new4">New Events</h2><br></br>
            <div class="Headline">
            <label>Headline* </label>
            <input type="text" id="Headline"  onChange = {(e) => setHeadline(e.target.value)} placeholder="Enter name"/>
            </div><br></br>
            <div class="Title">
            <label>Title* </label>
            <input type="text" id="Title"  onChange = {(e) => setTitle(e.target.value)} placeholder="Enter position"/>
            </div><br></br>
            <div class="Content">
            <label>Content*  </label>
            <textarea type="text" id="Content" onChange = {(e) => setContent(e.target.value)} placeholder="Content"  />
            </div><br></br>
            <div class="Message">
            <label>Message* </label>
            <input type="text" id="Message" onChange = {(e) => setMessage(e.target.value)} placeholder="Message"/>
            </div><br></br>
            <div class="Venue">
            <label>Venue* </label>
            <input type="text" id="Venue" onChange = {(e) => setVenue(e.target.value)} placeholder="Enter Venue"/>
            </div><br></br>
            <div class="Date">
                <label>Date* </label>
            <input type="date" id="Date" onChange = {(e) => setDate(e.target.value)}  />
            </div><br/>
            <button onClick={()=>handleSubmit()} type="submit" id="btn3">Submit</button>
        </div>
    );

}
export default EventForm;