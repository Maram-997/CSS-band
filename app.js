'use strict';
let myIndex = 0;
slideshow();

function slideshow() {
  let x = document.getElementsByClassName("slide");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideshow, 2000); // Change image every 2 seconds
}