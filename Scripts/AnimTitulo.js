document.addEventListener("DOMContentLoaded", function () {
    // Obtén la referencia al título y al botón
    const tituloContainer = document.querySelector('.titulo_container');
    const videoButton = document.getElementById('videoButton');
  
    // Después de 5 segundos, agrega la clase 'animate' al contenedor del título
    setTimeout(function () {
      tituloContainer.classList.add('animate');
    }, 2000);
  
    // Después de 5 segundos, muestra el botón gradualmente
    setTimeout(function () {
      videoButton.style.opacity = 1;
    }, 3000);
  
    // Agrega un evento de clic al botón para abrir la ventana emergente
    videoButton.addEventListener('click', function () {
        // Cambia la URL del video según tu necesidad
        const videoURL = 'https://www.youtube.com/@Hyprisma';
        // Abre la ventana emergente en una nueva pestaña
        window.open(videoURL, '_blank');
    });
  });
  