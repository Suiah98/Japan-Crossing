let videoid;

function random() {
  let number = Math.floor(Math.random() * 20);

  console.log(number);

  if (number == 0) {
    videoid = 'n3B8fp-Henc'
  } else if (number == 1) {
    videoid = 'HHkYJ99Ftzs'
  } else if (number == 2) {
    videoid = '8ZMLm-oxJvA'
  } else if (number == 3) {
    videoid = 'gFRtAAmiFbE'
  } else if (number == 4) {
    videoid = 'bwbxky23xDA'
  } else if (number == 5) {
    videoid = 'X4SczwEaCUg'
  } else if (number == 6) {
    videoid = 'mfliIqaZddU'
  } else if (number == 7) {
    videoid = 'bRJ0TLt_l4c'
  } else if (number == 8) {
    videoid = 'lA6TaaMGgDo'
  } else if (number == 9) {
    videoid = '_kNCRJ2Ray0'
  } else if (number == 10) {
    videoid = 'qYnCG4J26d8'
  } else if (number == 11) {
    videoid = 'DjdUEyjx8GM'
  } else if (number == 12) {
    videoid = 'hC_B8SfUBrc'
  } else if (number == 13) {
    videoid = 'p9HP6V9-p5Q'
  } else if (number == 14) {
    videoid = 'GEPJYPznC_Q'
  } else if (number == 15) {
    videoid = 'PMoO-HL7ERA'
  } else if (number == 16) {
    videoid = '3CmwLOgQxIY'
  } else if (number == 17) {
    videoid = '75TyMXSXlTE'
  } else if (number == 18) {
    videoid = '3kPH7kTphnE'
  } else if (number == 19) {
    videoid = 'xDuwBhvQx_w'
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