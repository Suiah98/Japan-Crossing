
let videoid;

function random() {
  let number = Math.floor(Math.random() * 5);

  console.log(number);

  if (number == 0) {
    videoid = 'n3B8fp-Henc'
  } else if (number == 1) {
    videoid = 'jC582a4HpuM'
  } else if (number == 2) {
    videoid = 'Jjyccfu1f40'
  } else if (number == 3) {
    videoid = 'xRvlP6IsnWg'
  } else if (number == 4) {
    videoid = 'gK6OQejRML4'
  }
}

random();


function onYouTubeIframeAPIReady() {
  let player;
  player = new YT.Player('YouTubeVideoPlayer', {
    videoId: videoid, // YouTube Video ID
    width: 860,               // Player width (in px)
    height: 516,              // Player height (in px)
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

function JapanTime() {
  offset = +9
  // create Date object for current location
  d = new Date();

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);

  // create new Date object for different city
  // using supplied offset
  nd = new Date(utc + (3600000 * offset));

  document.getElementById("time").innerHTML = "Hora actual: " + nd.toLocaleString();
  // return time as a string
  return nd.toLocaleString();
}
JapanTime();

function acnhmusicon() {
  document.getElementById("acnhmusicon").style.display = 'none';
  if (/4:*/g.test(nd)) {
    var audio = new Audio('data/music/4am.mp3');
    audio.play();
  } else if (/5:*/g.test(nd)) {
    var audio = new Audio('data/music/5am.mp3');
    audio.play();
  }
}