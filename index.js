window.onload = function() {
    typeWriter();
};
  
var i = 0;
var txt = 'Hola, I am Paola Lacouture!';
var speed = 70;
  
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("type").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}

