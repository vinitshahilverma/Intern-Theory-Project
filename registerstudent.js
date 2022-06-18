document.querySelector("form").addEventListener("submit",myfunction)
let userdata=JSON.parse(localStorage.getItem("userdata")) || []
function myfunction(event){
    event.preventDefault()
    let studentdata={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        number:document.querySelector("#mobile").value,
        city:document.querySelector("#city").value,
        peferencesr:document.querySelector("#peferences").value,
        how:document.querySelector("#how").value,
        looking:document.querySelector("#looking").value,
    }
    if(checkemails(studentdata.email,studentdata.number)==true)
    {
        userdata.push(studentdata)
        localStorage.setItem("userdata",JSON.stringify(userdata))
        window.location.href="addeducation.html"
    }
    else
    {
     alert("Account Already Exists")
    }
}
function checkemails(email,number){
let filtered =userdata.filter(function(el){
    return email==el.email 
    return number==el.number
})
if(filtered.length>0)
{
    return false
}
else
{
    return true
}
}

document.querySelector("#password").addEventListener("click",hideandshow)

function hideandshow(){
    document.querySelector("#HIDE").style.display="block"
   
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
