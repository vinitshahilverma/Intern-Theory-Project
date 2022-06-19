

   
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

    if (elem.email == loginStudentObj.Email && elem.password == loginStudentObj.Password||(elem.number == loginStudentObj.Email && elem.password == loginStudentObj.Password)) {

        fleg = true;

        localStorage.setItem("loginData", JSON.stringify(signUpStudent)); 
        localStorage.setItem("loginData2", JSON.stringify(signUpStudent));      
    }

  

})
if (fleg == true) {  
    window.location.href="profilepage.html"
    alert("Login Successfully")
}



else {
    alert("You aren't registered with Intern Theory. Please create an account and start applying for internships and courses.");
}

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







