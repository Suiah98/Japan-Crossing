let videoid;
let player;

async function getVideoIds() {
  const url = 'https://raw.githubusercontent.com/Suiah98/Japan-Crossing/main/data/ids.txt';

  try {
    const response = await fetch(url);
    const data = await response.text();
    const lines = data.split('\n');
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    videoid = randomLine.trim();

    // Llamar a onYouTubeIframeAPIReady aquí, después de obtener videoid
    onYouTubeIframeAPIReady();

  } catch (error) {
    console.error(error);
  }
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('YouTubeVideoPlayer', {
    videoId: videoid,
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      fs: 1,
      cc_load_policy: 0,
      iv_load_policy: 3,
      autohide: 0
    },
    events: {
      onReady: function (e) {
        e.target.mute();
      }
    }
  });
}

// Llama a getVideoIds directamente
getVideoIds().catch(console.error);