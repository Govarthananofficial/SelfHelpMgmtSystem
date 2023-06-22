import React,{useState} from "react";
function CommentForm()
{
const [Comments, setComments] = useState("");
const handleSubmit=()=>
{
  
  if(Comments=== ""){
    alert("Comments is required")
  }
  else{
localStorage.setItem("Comments",Comments);
alert('user saved!');
}
} 

     
return(

        <div class="form">
            <div class="Comment">
            <label>Comments* </label>
<textarea  onChange = {(e) => setComments(e.target.value)}  type="text" placeholder="Enter Comments" id="Comment"/>
</div>
<button onClick={handleSubmit} id="btnn">Submit</button>
</div>
    );
}

export default CommentForm;
