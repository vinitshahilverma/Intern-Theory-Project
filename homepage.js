var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}
var checkList2 = document.getElementById('list2');
checkList2.getElementsByClassName('types')[0].onclick = function(evt) {
  if (checkList2.classList.contains('visible'))
    checkList2.classList.remove('visible');
  else
    checkList2.classList.add('visible');
}
var checkList3 = document.getElementById('list3');
checkList3.getElementsByClassName('prefers')[0].onclick = function(evt) {
  if (checkList3.classList.contains('visible'))
    checkList3.classList.remove('visible');
  else
    checkList3.classList.add('visible');
}

// *********slide show**************************

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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