var messageArray =["DeNiro Dumas"];
var textPostion = 0;
var speed = 100;

typewriter=()=>{
  document.querySelector('.message').innerHTML= messageArray[0].substring(0,textPostion) +
  "<span>\u25ae</span>";

  if(textPostion++ != messageArray[0].length)
  setTimeout(typewriter,speed);
}

window.addEventListener("load",typewriter)