let videoid;

function random() {
  let number = Math.floor(Math.random() * 20);

  console.log(number);

  if (number == 0) {
    videoid = 'n3B8fp-Henc'
  } else if (number == 1) {
    videoid = 'uFMYPH26d6w'
  } else if (number == 2) {
    videoid = 'RYSLQjhWYX0'
  } else if (number == 3) {
    videoid = 'ukpdYqVxUs4'
  } else if (number == 4) {
    videoid = 'bwbxky23xDA'
  } else if (number == 5) {
    videoid = 'X4SczwEaCUg'
  } else if (number == 6) {
    videoid = 'dHR2c3cUbEs'
  } else if (number == 7) {
    videoid = 'PyDGlmd6FEY'
  } else if (number == 8) {
    videoid = '7bCuOAYf8Aw'
  } else if (number == 9) {
    videoid = '_kNCRJ2Ray0'
  } else if (number == 10) {
    videoid = 'qYnCG4J26d8'
  } else if (number == 11) {
    videoid = 'D5Qm6-dYut4'
  } else if (number == 12) {
    videoid = '4kMNNjUR7DU'
  } else if (number == 13) {
    videoid = 'wS9Ri_26d_A'
  } else if (number == 14) {
    videoid = 'QOjmvL3e7Lc'
  } else if (number == 15) {
    videoid = 'RglngEhZuhc'
  } else if (number == 16) {
    videoid = '3CmwLOgQxIY'
  } else if (number == 17) {
    videoid = 'W2zov_5F8L4'
  } else if (number == 18) {
    videoid = '1BifYoolUuo'
  } else if (number == 19) {
    videoid = 'RX_NCBuV_Z0'
  }
}

random();


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