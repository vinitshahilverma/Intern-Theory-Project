document.querySelector("form").addEventListener("submit",myfunction)
let companydata=[]
function myfunction(event){
    event.preventDefault()
   let data={
    name:document.querySelector("#name").value,
    companyname:document.querySelector("#companyname").value,
    mobile:document.querySelector("#mobile").value,
    email:document.querySelector("#email").value,
    password:document.querySelector("#password").value,
    how:document.querySelector("#how").value
   }
   companydata.push(data)
   localStorage.setItem("companydata",JSON.stringify(companydata))
   alert("Registration successfull proceed to login page")
   window.location.href="logincompany.html"
}
// <---------------------------script for side menu-------------------------------->
document.querySelector("#verma1").style.display="none";
document.querySelector("#hide1").addEventListener("click",myFunction);
 let count=0;
function myFunction(){
    count++
    if(count%2!==0){document.querySelector("#verma1").style.display="inline"}
    else{document.querySelector("#verma1").style.display="none"}
}


document.querySelector("#verma2").style.display="none";
document.querySelector("#hide2").addEventListener("click",myFunction1);
 let count1=0;
function myFunction1(){
    count1++
    if(count1%2!==0){document.querySelector("#verma2").style.display="inline"}
    else{document.querySelector("#verma2").style.display="none"}
}

document.querySelector("#verma3").style.display="none";
document.querySelector("#hide3").addEventListener("click",myFunction2);
 let count2=0;
function myFunction2(){
    count2++
    if(count2%2!==0){document.querySelector("#verma3").style.display="inline"}
    else{document.querySelector("#verma3").style.display="none"}
}