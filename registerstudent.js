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
    document.querySelector("#hide").style.display="block"
}