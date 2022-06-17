document.querySelector("form").addEventListener("submit",studentFun)
let education= JSON.parse(localStorage.getItem("educationdata")) || []
function studentFun(event){
    event.preventDefault()
    let data={
        education:document.querySelector("#levelofEducation").value,
        institution:document.querySelector("#institutionname").value,
        degree:document.querySelector("#degree").value,
        year:document.querySelector("#selectyear").value
    }
    education.push(data)
    if(data.education.value=="")
    {
        alert("please fill given details")
    }
    else
    {

      localStorage.setItem("educationdata",JSON.stringify(education))
      alert("Registration Successfull")  
    }
    
}