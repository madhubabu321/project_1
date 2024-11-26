
function updateDetails(){
let name=document.getElementById("update-name");
let nameValue=name.value;
console.log(nameValue);
nameValue="";
let nameUpdate=document.getElementById("update-name-2");
nameUpdate.innerHTML=prompt("Enter New name: ");
nameValue=nameUpdate;



let bio=document.getElementById("update-bio");
let bioValue=bio.value;
console.log(bioValue);
bioValue="";
let bioUpdate=document.getElementById("update-bio-2");
bioUpdate.innerHTMl=prompt("Enter New Bio: ");
bioValue=bioUpdate;

}
