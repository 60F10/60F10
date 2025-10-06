


// Botón para mostrar los detalles
let btn = document.getElementById("btnInfo");
btn.addEventListener("click", mostrarInfo);


//Funcion para mostrar la informacion de la pantalla
function mostrarInfo() {
   document.querySelector(".contenido").classList.add("show");
   document.querySelector(".boton").classList.add("escondido");
   document.querySelector(".subtitulo1").classList.add("escondido")
   document.querySelector("#titulo").classList.add("animacionParpadeo");
}