let videoid;

function random() {
  let number = Math.floor(Math.random() * 20);

  console.log(number);

  if (number == 0) {
    videoid = 'n3B8fp-Henc'
  } else if (number == 1) {
    videoid = 'uFMYPH26d6w'
  } else if (number == 2) {
    videoid = 'AZgvRzMkoQU'
  } else if (number == 3) {
    videoid = 'AnXk2XMuxBU'
  } else if (number == 4) {
    videoid = '7ParEly6akk'
  } else if (number == 5) {
    videoid = 'v6ll972S9rw'
  } else if (number == 6) {
    videoid = 'HpdO5Kq3o7Y'
  } else if (number == 7) {
    videoid = 'PyDGlmd6FEY'
  } else if (number == 8) {
    videoid = '7uXGfQpGY5U'
  } else if (number == 9) {
    videoid = '_kNCRJ2Ray0'
  } else if (number == 10) {
    videoid = 'dHR2c3cUbEs'
  } else if (number == 11) {
    videoid = 'hLpqXrNFyCg'
  } else if (number == 12) {
    videoid = '4kMNNjUR7DU'
  } else if (number == 13) {
    videoid = 'sMyqzBcvVgk'
  } else if (number == 14) {
    videoid = 'QOjmvL3e7Lc'
  } else if (number == 15) {
    videoid = 'HVUBj8oUd_o'
  } else if (number == 16) {
    videoid = '3CmwLOgQxIY'
  } else if (number == 17) {
    videoid = 'lqD11f7AI6g'
  } else if (number == 18) {
    videoid = 'QyEdfyqziKY'
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