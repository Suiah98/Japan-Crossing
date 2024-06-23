let videoIds = [
  'n3B8fp-Henc', 'Z5tqB0y3pB8', 'Qogkj93oz7I', 'gFRtAAmiFbE',
  'CF1vS8DdBIk', 'GLQhbRGv5qU', 'KsoxRtx01KE', '0UUu10W-K2Q',
  'lA6TaaMGgDo', '_kNCRJ2Ray0', 'qYnCG4J26d8', 'DjdUEyjx8GM',
  '8oxK2mrDxhQ', 'm_WCI3EQRwQ', '1o9IDZB47GU', 'orjgCwFT_lY',
  'ErHJBXTmm2Q', 'qz8F44n5DEw', 'Tuaju77urJ4', 'Y1tPPc61i2Q'
];
  
  window.onload = function() {
    let container = document.getElementById("videosContainer");
    
    videoIds.forEach(function(videoId) {
      // Crear un elemento div que contendrá el título y el iframe
      let videoDiv = document.createElement("div");
      videoDiv.className = "videoWrapper";
      
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