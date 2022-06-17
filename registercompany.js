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
   console.log(companydata)
}