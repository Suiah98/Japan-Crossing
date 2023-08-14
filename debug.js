let videoIds = [
  'n3B8fp-Henc', 'Z5tqB0y3pB8', 'Fb0imHesPEk', 'gFRtAAmiFbE',
  'SDRS6JQulmI', 'IBFCV4zhMGc', '14qkV3K5tPs', 'Lybr9mw41ic',
  'lA6TaaMGgDo', '_kNCRJ2Ray0', 'qYnCG4J26d8', 'DjdUEyjx8GM',
  '6Doy_fueZ_w', '5WOdIfrzFGw', 'GEPJYPznC_Q', 'k9scLesLX5I',
  '3CmwLOgQxIY', 'Mc91xfTexpA', '3kPH7kTphnE', '5WOdIfrzFGw'
];
  
  window.onload = function() {
    let container = document.getElementById("videosContainer");
    
    videoIds.forEach(function(videoId) {
      // Crear un elemento div que contendrá el título y el iframe
      let videoDiv = document.createElement("div");
      videoDiv.className = "videoWrapper"; // para un posible estilo
      
      // Crear y agregar el título/etiqueta con el ID del video
      let label = document.createElement("p");
      label.innerText = videoId;
      videoDiv.appendChild(label);
      
      // Crear y agregar el iframe
      let iframe = document.createElement("iframe");
      iframe.setAttribute("width", "420");
      iframe.setAttribute("height", "280");
      iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?modestbranding=1&autoplay=1&mute=1`);
      videoDiv.appendChild(iframe);
      
      // Agregar el div del video al contenedor principal
      container.appendChild(videoDiv);
    });
  };