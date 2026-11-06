const words = [
    "Web Designer",
    "Graphic Designer",
    "Creative Learning",
    "Future Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    
     const typing =
  document.getElementById("typing");
  const currentWord =   
  words[wordIndex];

  if (deleting) {
    vharIndex--;

  } else{
    charIndex++;
  }
  typing.textcontent = 
  currentWord.substring(0,charIndex);

  let speed = deleting ? 60 : 120;

  if (!deleting && charIndex === currentWord.length) {
    deleting = true;
    speed = 1200;
  }

  else if (deleting && charIndex === 0 ) {

    deleting = false;
    wordIndex = (wordIndex + 1) 
    % words.length;
    speed = 400;
  } 

  setTimeout(typeEffect, speed);


}

typeEffect();