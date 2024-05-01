document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario ya ha visitado la página antes
    var haVisitado = localStorage.getItem("haVisitado");
    
    // Si es la primera visita o si la imagen aún no se ha mostrado en esta sesión, mostrar la imagen de inicio
    if (haVisitado || sessionStorage.getItem("imagenMostrada") == "true") {
        // Muestra la imagen de inicio
        document.getElementById("contenedor-imagen").style.display = "block";
        // Oculta el contenido principal
        document.getElementById("contenedor-contenido").style.display = "none";

        // Espera 1 segundo antes de mostrar el contenido principal
        setTimeout(function() {
            // Oculta la imagen de inicio
            document.getElementById("contenedor-imagen").style.display = "none";
            // Muestra el contenido principal
            document.getElementById("contenedor-contenido").style.display = "block";
            
            // Marca que la imagen se ha mostrado en esta sesión
            sessionStorage.setItem("imagenMostrada", "true");
        }, 1000); // Cambia a 1000 para esperar 1 segundo
    } else {
        // Si ya ha visitado la página antes y la imagen ya se ha mostrado en esta sesión, simplemente muestra el contenido principal
        document.getElementById("contenedor-imagen").style.display = "none";
        document.getElementById("contenedor-contenido").style.display = "block";
    }
});
// Modulo eventos

  // Agregamos un manejador de eventos al botón "View"
  document.getElementById("viewButton").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage").style.display = "block";
  });
  document.getElementById("closeButton").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage").style.display = "none";
  });
  document.getElementById("viewButton2").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage2").style.display = "block";
  });
  document.getElementById("closeButton2").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage2").style.display = "none";
  });
  document.getElementById("viewButton3").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage3").style.display = "block";
  });
  document.getElementById("closeButton3").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage3").style.display = "none";
  });
  document.getElementById("viewButton4").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage4").style.display = "block";
  });
  document.getElementById("closeButton4").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage4").style.display = "none";
  });
  document.getElementById("viewButton5").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage5").style.display = "block";
  });
  document.getElementById("closeButton5").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage5").style.display = "none";
  });
  document.getElementById("viewButton6").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage6").style.display = "block";
  });
  document.getElementById("closeButton6").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage6").style.display = "none";
  });
  document.getElementById("viewButton7").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage7").style.display = "block";
  });
  document.getElementById("closeButton7").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage7").style.display = "none";
  });
  document.getElementById("viewButton8").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage8").style.display = "block";
  });
  document.getElementById("closeButton8").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage8").style.display = "none";
  });
  document.getElementById("viewButton9").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage9").style.display = "block";
  });
  document.getElementById("closeButton9").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage9").style.display = "none";
  });
  document.getElementById("viewButton10").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage10").style.display = "block";
  });
  document.getElementById("closeButton10").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage10").style.display = "none";
  });
  document.getElementById("viewButton11").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage11").style.display = "block";
  });
  document.getElementById("closeButton11").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage11").style.display = "none";
  });
  document.getElementById("viewButton12").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage12").style.display = "block";
  });
  document.getElementById("closeButton12").addEventListener("click", function() {
    // Mostramos la imagen al hacer clic en el botón
    document.getElementById("cardImage12").style.display = "none";
  });
 