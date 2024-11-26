let userName=document.getElementById("username");
let userNameValue=userName.value;
console.log(userNameValue);
w

function checkPass(){
    let pass=document.getElementById("password");
    let passValue=pass.value;
    if(passValue.length<8){
        let errMessage=document.createElement("p")
        errMessage.innerHTML="password Length should be greater than length 8";
        let passError=document.getElementById("pass-error");
        passError.innerHTML="";
        passError.append(errMessage);
        
    }
}
function checkGmail(){
    let emailCheck=document.getElementById("email");
    let emailCheckValue=emailCheck.value;
    let emailError=document.getElementById("email-error");
    let emailErrornotification=document.createElement("p");
    emailErrornotification.innerhtml="Enter valid Email" ;
    if(emailCheckValue.endsWith!="@gmail.com"){
        emailError.append(emailErrornotification);
    }
}