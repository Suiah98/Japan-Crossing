let videoid;

// Función para obtener los IDs de video desde un archivo en GitHub
async function getVideoIds() {
  const url = 'https://raw.githubusercontent.com/Suiah98/Japan-Crossing/main/data/ids.txt';

  try {
    const response = await fetch(url);
    const data = await response.text();

    // Dividir el contenido en líneas y seleccionar una línea al azar
    const lines = data.split('\n');
    const randomLine = lines[Math.floor(Math.random() * lines.length)];

    // Asignar el valor de videoid a la línea seleccionada
    videoid = randomLine.trim();

    // Llamar a la función onYouTubeIframeAPIReady para cargar el reproductor de YouTube
    onYouTubeIframeAPIReady();
  } catch (error) {
    console.log(videoid);
  }
}

function onYouTubeIframeAPIReady() {
  let player;
  player = new YT.Player('YouTubeVideoPlayer', {
    videoId: videoid, // YouTube Video ID
    width: "100%",               // Player width (in px)
    height: "100%",              // Player height (in px)
    playerVars: {
      autoplay: 1,        // Auto-play the video on load
      controls: 1,        // Show pause/play buttons in player
      showinfo: 0,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 1,            // Run the video in a loop
      fs: 1,              // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0         // Hide video controls when playing
    },
    events: {
      onReady: function (e) {
        e.target.mute();
      }
    }
  });
}

getVideoIds();
