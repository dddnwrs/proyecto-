document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  const closeButton = document.querySelector(".close");

  // Manejar el clic en los botones de video
  document.querySelectorAll(".video-btn").forEach(button => {
      button.addEventListener("click", function() {
          const videoId = this.getAttribute("data-video-id");
          videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
          modal.style.display = "block";
      });
  });

  // Cerrar el modal al hacer clic en la 'x'
  closeButton.addEventListener("click", function() {
      modal.style.display = "none";
      videoFrame.src = ""; // Detener el video al cerrar el modal
  });

  // Cerrar el modal si se hace clic fuera del contenido
  window.addEventListener("click", function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          videoFrame.src = ""; // Detener el video al cerrar el modal
      }
  });
});

  