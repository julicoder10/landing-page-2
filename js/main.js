let darkMode = document.getElementById('boton');
let body = document.getElementById('principal-section');

darkMode.addEventListener("click", function(){
  body.classList.toggle('active');
})
