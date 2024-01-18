var t=document.getElementById("theme-btn"); //Moon icon
var m=document.getElementById("moon");
var sun=document.getElementById("sun");
var x = document.getElementById("password"); // Input
var s = document.getElementById("show"); // Show pass
var h = document.getElementById("hide"); // Hide pass
var ft=0;

window.onload=function(event){
    sun.style.display="none";
    h.style.display = "none"
}

function darkMode(){
    let element = document.body;
    element.classList.toggle("darkMode");
   
    if(ft==1){
        sun.style.display="none";
        m.style.display="inline";
       
        
    }
    else{
        m.style.display="none";
        sun.style.display="inline";
        ft=1;
    }

}



function togglePass() {
  if (x.type === "password") {
    x.type = "text";
    s.style.display = "none";
    h.style.display = "inline";
  } else {
    x.type = "password";
    s.style.display = "inline";
    h.style.display = "none";
  }
}