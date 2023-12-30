let videoIds = [
  'n3B8fp-Henc', 'Z5tqB0y3pB8', 'Fb0imHesPEk', 'gFRtAAmiFbE',
  'CF1vS8DdBIk', 'c7BXfK2OCfI', 'pQeiX4MIjm4', 'Lybr9mw41ic',
  'lA6TaaMGgDo', '_kNCRJ2Ray0', 'qYnCG4J26d8', 'DjdUEyjx8GM',
  '2JcOHCCV4MA', '8i9ltzhq80s', 'GEPJYPznC_Q', 'Bj6A3LFL9TM',
  '6bPfX9m7wVU', 'VhGxxZ1X9dw', '3kPH7kTphnE', 'LR7i5_pkJBg'
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