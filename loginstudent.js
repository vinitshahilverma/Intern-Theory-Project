

   
signUpStudent=JSON.parse(localStorage.getItem("userdata"))||[];


sub=document.querySelector("#form").addEventListener("submit",loginStudent);

function loginStudent(event){

event.preventDefault();

let loginStudentObj={

      Email:document.querySelector("#email").value,
      Password:document.querySelector("#password").value,

}

let fleg=false;


signUpStudent.forEach(function (elem) {

    if (elem.email == loginStudentObj.Email && elem.password == loginStudentObj.Password) {

        fleg = true;

        localStorage.setItem("loginData", JSON.stringify(signUpStudent)); 
        localStorage.setItem("loginData2", JSON.stringify(signUpStudent));      
    }

  

})
if (fleg == true) {  
    window.location.href="profilepage.html"
}



else {
    alert("You aren't registered with Intern Theory. Please create an account and start applying for internships and courses.");
}

}







