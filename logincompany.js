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

