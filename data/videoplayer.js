let videoIds = [
  'n3B8fp-Henc', 'Z5tqB0y3pB8', 'Fb0imHesPEk', 'gFRtAAmiFbE',
  'SDRS6JQulmI', 'IBFCV4zhMGc', '14qkV3K5tPs', 'Lybr9mw41ic',
  'lA6TaaMGgDo', '_kNCRJ2Ray0', 'qYnCG4J26d8', 'DjdUEyjx8GM',
  '6Doy_fueZ_w', '5WOdIfrzFGw', 'GEPJYPznC_Q', 'k9scLesLX5I',
  '3CmwLOgQxIY', 'Mc91xfTexpA', '3kPH7kTphnE', '5WOdIfrzFGw'
];

function random() {
  let index = Math.floor(Math.random() * videoIds.length);
  let videoid = videoIds[index];
  console.log(videoid);
  return videoid;
}

function onYouTubeIframeAPIReady() {
  let player;
  player = new YT.Player('YouTubeVideoPlayer', {
    videoId: random(), // YouTube Video ID
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