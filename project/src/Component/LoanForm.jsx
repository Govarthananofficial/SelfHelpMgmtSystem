import React, {useState} from "react";
function LoanForm()
{
    const [Applicant, setApplicant] = useState("");
  const [Identification, setIdentification] = useState("");
  const [Address, setAddress] = useState("");
  const [Street, setStreet] = useState("");
  const [House, setHouse] = useState("");
  const [MarritalStatus, setMarritalStatus] = useState("");
  const [LoanType, setLoanType] = useState("");
  const [SecurityDetails, setSecurityDetails] = useState("");
  const [Approval, setApproval] = useState("");
  const [LoanStatus, setLoanStatus] = useState("");
  const [PaymentPeriod, setPaymentPeriod] = useState("");
  const [Date, setDate] = useState("");
  const handleSubmit=()=>
    {
      
      if(Applicant=== ""){
        alert("Applicant is required")
      }
      else if(Identification=== ""){
        alert("Identification is required")
      }
      else if(Address=== ""){
        alert("Address is required")
      }
      else if(Street=== ""){
        alert("Street is required")
      }
      else if(House=== ""){
        alert("House is required")
      }
      else if(MarritalStatus=== ""){
        alert("MarritalStatus is required")
      }
      else if(LoanType=== ""){
        alert("LoanType is required")
      }
      else if(SecurityDetails=== ""){
        alert("SecurityDetails is required")
      }
      else if(Approval=== ""){
        alert("Approval is required")
      }
      else if(LoanStatus=== ""){
        alert("LoanStatus is required")
      }
      else if(PaymentPeriod=== ""){
        alert("PaymentPeriod is required")
      }
      else if(Date=== ""){
        alert("Date is required")
      }else{
    localStorage.setItem("Applicant",Applicant);
    localStorage.setItem("Identification",Identification);
    localStorage.setItem("Address",Address);
    localStorage.setItem("Street",Street);
    localStorage.setItem("House",House);
    localStorage.setItem("MarritalStatus",MarritalStatus);
    localStorage.setItem("LoanType",LoanType);
    localStorage.setItem("SecurityDetails",SecurityDetails);
    localStorage.setItem("Approval",Approval);
    localStorage.setItem("LoanStatus",LoanStatus);
    localStorage.setItem("PaymentPeriod",PaymentPeriod);
    localStorage.setItem("Date",Date);
    alert('user saved!');
  }
  }
    
    return(
        <div class="Form">
          <h2 id="new5">New Loan</h2><br></br>
            <div class="applicant">
            <label>Applicant Name*</label>
            <input type="text" id="Applicant"  onChange = {(e) => setApplicant(e.target.value)} placeholder="Enter name"/>
            </div><br></br>
            <div class="identification">
            <label>Identification*</label>
            <input type="text" id="Identification" onChange = {(e) => setIdentification(e.target.value)} placeholder="Enter Identification"/>
            </div><br></br>
            <div class="address">
            <label>Address*</label>
            <input type="text" id="Address" onChange = {(e) => setAddress(e.target.value)}  placeholder="Enter address"/>
            </div><br></br>
            <div class="street">
            <label>Street*</label>
            <input type="text" id="Street" onChange = {(e) => setStreet(e.target.value)}  placeholder="Enter street"/>
            </div><br></br>
            <div class="House">
            <label>House*</label>
            <select id="House" onChange = {(e) => setHouse(e.target.value)}>
                <option value="select a value">Select a value..</option>
                <option value="Own">Own</option>
                <option value="Rented">Rented</option>
            </select>
            </div><br></br>
            <div class="marrital">
            <label>Marrital Status*</label>
            <select id="Marritalstatus" onChange = {(e) => setMarritalStatus(e.target.value)}>
                <option value="select a value">Select a value..</option>
                <option value="married">married</option>
                <option value="single">single</option>
            </select>
            </div><br></br>
            <div class="loantype">
            <label>Loan Type*</label>
            <div id="Loantype" onChange = {(e) => setLoanType(e.target.value)}>
           <input type="checkbox" id="loantype" value="Business" defaultChecked={LoanType==="Business"}  />Business
            <input type="checkbox" id="loantype" value="School Fee"  defaultChecked={LoanType==="School Fee"}/>School Fee 
            <input type="checkbox" id="loantype" value="Others"  defaultChecked={LoanType==="Others"} />Others
            </div>
            </div><br></br>
            <div class="security">
                <label>Security Details*</label>
                <div id="SecurityDetails" onChange = {(e) => setSecurityDetails(e.target.value)}>
                <input type="radio" id="security" name="Security" value="Salary" defaultChecked={LoanType==="Salary"} />Salary
                <input type="radio" id="security" name="Security" value="Guaranteers" defaultChecked={LoanType==="Guaranteers"} />Guaranteers
                <input type="radio" id="security" name="Security"  value="Others" defaultChecked={LoanType==="Others"}/>Others
               </div>
            </div><br></br>
            <div class="approval">
                <label>Approval *</label>
                <div id="Approval" onChange = {(e) => setApproval(e.target.value)}>
                <input type="radio" id="approval" name="money" value="$10000" defaultChecked={LoanType==="$10000"} />10000
                <input type="radio" id="approval"  name="money" value="$20000" defaultChecked={LoanType==="$20000"}/>20000
                <input type="radio" id="approval" name="money"  value="$25000" defaultChecked={LoanType==="$25000"}/>25000
                </div>
            </div><br></br>
            <div class="loanstatus">
                <label>Loan Status*</label>
                <div id="Loanstatus" onChange = {(e) => setLoanStatus(e.target.value)}>
                <input type="radio" id="loanstatus" name="loan" value="Approved" defaultChecked={LoanType==="Approved"}/>Approved
               <input type="radio" id="loanstatus" name="loan" value="Rejected" defaultChecked={LoanType==="Rejected"}/>Rejected
               </div>
             </div><br></br>
            <div class="paymentperiod">
                <label>Payment Period*</label>
                <div id="PaymentPeriod" onChange = {(e) => setPaymentPeriod(e.target.value)}>
                <input type="radio" id="paymentperiod" name="loans" value="6 months" defaultChecked={LoanType==="6 months"}/>6 months
                <input type="radio" id="paymentperiod" name="loans" value="1 year" defaultChecked={LoanType==="1 year"}/>1 year
                <input type="radio" id="paymentperiod" name="loans" value="2 year" defaultChecked={LoanType==="2 year"}/>2 year
                </div>
            </div><br></br>
<div class="date1">
<label>Date* </label>
<input id="Dates" type="date" onChange = {(e) => setDate(e.target.value)}/>
</div> <br></br>
<button onClick={()=>handleSubmit()} type="submit" id="Btn">Submit</button>   
        </div>
    );
}
export default LoanForm;