const sendVetoLink = () => {
    let mobileNumber = document.getElementById('send_veto_link').value;
    mobileNumber = mobileNumber.trim();
    if(mobileNumber == ""){
        alert('Cannot be empty.');
        return;
    }
    else if(isNaN(mobileNumber)){
        alert("Please enter numbers only.");
        return;
    }else if(mobileNumber.length > 10 || mobileNumber.length < 10){
        alert("Must be 10 digits.");
        return;
    }
    else{
        alert("Link sent successfully");
    }
}