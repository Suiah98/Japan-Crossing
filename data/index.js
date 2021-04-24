
let videoid;

function random() {
  let number = Math.floor(Math.random() * 16);

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
  } else if (number == 5) {
    videoid = '8sOYHDiFlCg'
  } else if (number == 6) {
    videoid = 'HpdO5Kq3o7Y'
  } else if (number == 7) {
    videoid = '4TnsTVJMGe4'
  } else if (number == 8) {
    videoid = 'EXM7NSKsUP8'
  } else if (number == 9) {
    videoid = '_kNCRJ2Ray0'
  } else if (number == 10) {
    videoid = 'YlZ0YA2ZdBE'
  } else if (number == 11) {
    videoid = 'hywqg7QXXv8'
  } else if (number == 12) {
    videoid = 'm9A92wkufE8'
  } else if (number == 13) {
    videoid = 'fv9Iz0CWpPk'
  } else if (number == 14) {
    videoid = 'QOjmvL3e7Lc'
  } else if (number == 15) {
    videoid = 'fQ5x54V4qdQ'
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

  document.getElementById("time").innerHTML = "Current time of Tokio: " + nd.toLocaleString();
  return nd.toLocaleString();
}

setInterval(function () {
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

  document.getElementById("time").innerHTML = "Current time of Tokio: " + nd.toLocaleString();
  return nd.toLocaleString();
}, 1000);

JapanTime()

let sptime = nd.toLocaleString();
sptime = sptime.split(':')


//console.log(sptime[0])

function acnhmusicon() {
  document.getElementById("acnhmusicon").style.display = 'none';
  if (/10:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/10am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("10am");
  } else if (/11:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/11am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("11am");
  } else if (/12:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/12pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("12pm");
  } else if (/13:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/1pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("1pm");
  } else if (/14:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/2pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("2pm");
  } else if (/15:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/3pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("3pm");
  } else if (/16:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/4pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("4pm");
  } else if (/17:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/5pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("5pm");
  } else if (/18:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/6pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("6pm");
  } else if (/19:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/7pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("7pm");
  } else if (/20:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/8pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("8pm");
  } else if (/21:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/9pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("9pm");
  } else if (/22:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/10pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("10pm");
  } else if (/23:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/11pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("11pm");
  } else if (/0:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/12am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("0am");
  } else if (/1:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/1am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("1am");
  } else if (/2:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/2am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("2am");
  } else if (/3:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/3am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("3am");
  } else if (/4:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/4am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("4am");
  } else if (/5:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/5am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("5am");
  } else if (/6:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/6am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("6am");
  } else if (/7:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/7am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("7am");
  } else if (/8:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/8am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("8am");
  } else if (/9:*$/g.test(sptime[0])) {
    var audio = new Audio('data/music/9am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    console.log("9am");
  }
}