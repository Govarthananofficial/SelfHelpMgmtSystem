import React from "react";
const Loanlist=()=>
{
    return(
<div class="loanlist">
<h2 id="first">Loan</h2><br></br>
    <p>
        Applicant Name:{""}
        {localStorage.getItem("ApplicantName")
        ?localStorage.getItem("ApplicantName")
    :"NA"}
    </p><br></br>
    <p>
        Identification:{""}
        {localStorage.getItem("Identification")
        ?localStorage.getItem("Identification")
    :"NA"}
    </p><br></br>
    <p>
        Address:{""}
        {localStorage.getItem("Address")
        ?localStorage.getItem("Address")
    :"NA"}
    </p><br></br>
    <p>
      Street:{""}
        {localStorage.getItem("Street")
        ?localStorage.getItem("Street")
    :"NA"}
    </p><br></br>
    <p>
       House:{""}
        {localStorage.getItem("House")
        ?localStorage.getItem("House")
    :"NA"}
    </p><br></br>
    <p>
      Marrital Status:{""}
        {localStorage.getItem("MarritalStatus")
        ?localStorage.getItem("MarritalStatus")
    :"NA"}
    </p> <br></br>
    <p>
      Loan Type:{""}
        {localStorage.getItem("LoanType")
        ?localStorage.getItem("LoanType")
    :"NA"}
    </p> <br></br>
    <p>
      Security Details:{""}
        {localStorage.getItem("SecurityDetails")
        ?localStorage.getItem("SecurityDetails")
    :"NA"}
    </p> <br></br>
    <p>
    Approval:{""}
        {localStorage.getItem("Approval")
        ?localStorage.getItem("Approval")
    :"NA"}
    </p> <br></br>
    <p>
    Loan Status:{""}
        {localStorage.getItem("LoanStatus")
        ?localStorage.getItem("LoanStatus")
    :"NA"}
    </p> <br></br>
    <p>
    Payment Period:{""}
        {localStorage.getItem("PaymentPeriod")
        ?localStorage.getItem("PaymentPeriod")
    :"NA"}
    </p> <br></br>
    <p>
    Date:{""}
        {localStorage.getItem("Date")
        ?localStorage.getItem("Date")
    :"NA"}
    </p> <br></br>
    
    
</div>

    );
}
export default Loanlist;