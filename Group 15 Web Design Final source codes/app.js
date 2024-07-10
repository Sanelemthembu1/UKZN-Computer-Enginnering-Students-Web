window.onload = function() {
    window.setTimeout(fadeout, 2500); //5 seconds
  }

  function fadeout() {
    document.getElementById('quote').style.opacity = '0';
  }
  function validate(){

var username=document.getElementById("loginUser").value;
var password=document.getElementById("loginPassword").value;

if(username=="220087132"&&password=="sanele"){
    window.location.assign("login.html");
    document.getElementById("user").value="Student";
alert("Login Succesfull as a Student");

}
else if(username=="admin"&&password=="admin@1"){
    window.location.assign("admin.html");
    document.getElementById("user").innerHTML = "Admin";

    alert("Login Succesfull as an Admin");

}
else{

alert("Login Failed, Invalid User!");
}

}
function show_result(){
let c=document.querySelector("#c").value;
let mt=document.querySelector("#mt").value;
let ph=document.querySelector("#ph").value;
let ja=document.querySelector("#ja").value;
let csa=document.querySelector("#csa").value;
let to = parseFloat(c)+parseFloat(mt)+parseFloat(ph)+parseFloat(ja)+parseFloat(csa);
let per=(to*100)/500;
if(per>=85){
    document.querySelector(".gra").innerHTML="A+";

}
else if(per>=75){
    document.querySelector(".gra").innerHTML="A";
}
else if(per>=70){
    document.querySelector(".gra").innerHTML="B";
}
else if(per>=60){
    document.querySelector(".gra").innerHTML="C";
}
else if(per>=50){
    document.querySelector(".gra").innerHTML="D";
}
function clearInput(inputElement) {
    // Check if the input has a value
    if (inputElement.value.length > 0) {
      inputElement.value = ''; // Clear the input field
    }
  }
  function moveLabelAbove(inputElement) {
    const label = inputElement.previousElementSibling;
    label.style.transform = 'translateY(-20px)';
    label.style.fontSize = '0.8rem';
  }
  
  function clearInput(inputElement) {
    inputElement.value = '';
  }
  
  function validate() {
    // Add your validation logic here
    // You can check if the inputs are filled correctly and prevent the form submission if needed
  }
  

document.querySelector(".to").innerHTML=to;
document.querySelector(".per").innerHTML=per;
if(per>50){
    document.querySelector(".result h2").innerHTML="Pass";
}
if(per<50){
    document.querySelector(".gra").innerHTML="F";
    document.querySelector(".result h2").innerHTML="Poor Perfomance, Counceling Required";
}
}
function passvalues()
{
    var average = document.getElementById("per").value;
    localStorage.setItem("textvalue",average);
    return false;
}
