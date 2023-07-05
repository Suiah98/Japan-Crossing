var lastFunction;
var hasChanged = false;

function tune() {
  stopCurrentAudio();
  let audio = new Audio('data/music/tune.mp3');
  audio.play();
}

function HourChanged() {
  tune();

  // Ejecuta la última función después de un breve retraso para dar tiempo a que se reproduzca el sonido
  setTimeout(function () {
    window[lastFunction]();
  }, 15000);
}

function JapanTime() {
  offset = +9
  d = new Date();
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  nd = new Date(utc + (3600000 * offset));
  document.getElementById("time").innerHTML = "Current time of Tokio: " + nd.toLocaleString();

  if (nd.getMinutes() === 0 && nd.getSeconds() === 0) {
    sptime = nd.toLocaleString();
    sptime = sptime.split(':')
    HourChanged();
  }

  // Cambia la imagen de fondo dependiendo de la hora del día
  let hour = nd.getHours();
  let body = document.body;

  if (!hasChanged) {
    if (hour >= 18 || hour <= 5) {
      body.classList.add('night');
      body.classList.remove('day');
      hasChanged = true;
    } else {
      body.classList.add('day');
      body.classList.remove('night');
      hasChanged = true;
    }
  }

  return nd.toLocaleString();
}

setInterval(JapanTime, 1000);
JapanTime()

let sptime = nd.toLocaleString();
sptime = sptime.split(':')

function reset() {
  alert("WAAAAAAAAH!!! DON'T RESET!!");
  stopCurrentAudio();
  window.open("https://www.youtube.com/watch?v=ASSVvGa84IA");
}

// Halloween
let halloween = (function () {
  let executed = false;
  let halloween = new RegExp('31/10');
  return function () {
    if (!executed) {
      executed = true;
      if (halloween.test(sptime[0])) {
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function () {
          callFunctionFromScript();
        }
        document.body.style.backgroundImage = "url('https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FWLQMLJVRRFUVJMCOY2WZPRHVM.png')";
      }
    }
  };
})();

halloween();

// Nieve en Diciembre
let snow = (function () {
  let executed = false;
  let december = new RegExp('/12');
  let january = new RegExp('/1/');
  return function () {
    if (!executed) {
      executed = true;
      if (december.test(sptime[0])) {
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function () {
          callFunctionFromScript();
        }
        script.src = 'data/snowstorm.js';
        head.appendChild(script);
        document.body.style.backgroundImage = "url('https://p4.wallpaperbetter.com/wallpaper/1009/498/357/animal-crossing-animal-crossing-new-leaf-new-leaf-pattern-wallpaper-preview.jpg')";
        document.body.style.color = "#4a4a4a";
      }
    }
    if (january.test(sptime[0])) {
      let head = document.getElementsByTagName('head')[0];
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = function () {
        callFunctionFromScript();
      }
      script.src = 'data/snowstorm.js';
      head.appendChild(script);
      document.body.style.backgroundImage = "url('https://cutewallpaper.org/25/animal-crossing-repeat-wallpaper/shop-99dfe-personal-b0b12-drawing-fd165-of-9f58f-your-372bd-character-d012b-signature-f06a2-the-e4471-bell---tree---animal---crossing---forums.png')";
      document.body.style.color = "#4a4a4a";
    }
  };
})();

snow();

// Variables para almacenar las referencias a los objetos de audio
let currentAudio = null;

// Función para detener la reproducción del audio actual
function stopCurrentAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

// New Horizons Music , primero se comprueba si estamos en alguna fecha especial
function acnhmusicon() {
  // Remover la clase "selected" de los otros botones
  document.getElementById("acnlmusicon").classList.remove("selected");
  document.getElementById("wwcfmusicon").classList.remove("selected");
  lastFunction = 'acnhmusicon';

  // Agregar la clase "selected" al botón actual
  document.getElementById("acnhmusicon").classList.add("selected");
  // Detener la reproducción del audio actual
  stopCurrentAudio();
  let halloween = new RegExp('31/10');
  let toyday = new RegExp('24/12');
  let newyeareve = new RegExp('31/12');
  if (newyeareve.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/newyeareve.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("new year eve!!");
  } else if (toyday.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/toyday.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("chritsmas!!");
  } else if (halloween.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/halloween.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("halloween!!");
  } else if (/10:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/10am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("10am");
  } else if (/11:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/11am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("11am");
  } else if (/12:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/12pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("12pm");
  } else if (/13:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/1pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("1pm");
  } else if (/14:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/2pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("2pm");
  } else if (/15:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/3pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("3pm");
  } else if (/16:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/4pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("4pm");
  } else if (/17:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/5pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("5pm");
  } else if (/18:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/6pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("6pm");
  } else if (/19:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/7pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("7pm");
  } else if (/20:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/8pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("8pm");
  } else if (/21:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/9pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("9pm");
  } else if (/22:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/10pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("10pm");
  } else if (/23:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/11pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("11pm");
  } else if (/0:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/12am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("0am");
  } else if (/1:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/1am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("1am");
  } else if (/2:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/2am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("2am");
  } else if (/3:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/3am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("3am");
  } else if (/4:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/4am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("4am");
  } else if (/5:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/5am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("5am");
  } else if (/6:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/6am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("6am");
  } else if (/7:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/7am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("7am");
  } else if (/8:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/8am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("8am");
  } else if (/9:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnh/9am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("9am");
  }
}

// Recarga el iframe de los vídeos
function reloadiframe() {
  var iframe = document.getElementById('iframe');
  iframe.src = iframe.src;
}

// New Leaf Music , primero se comprueba si estamos en alguna fecha especial
function acnlmusicon() {
  // Remover la clase "selected" de los otros botones
  document.getElementById("acnhmusicon").classList.remove("selected");
  document.getElementById("wwcfmusicon").classList.remove("selected");
  lastFunction = 'acnlmusicon';

  // Agregar la clase "selected" al botón actual
  document.getElementById("acnlmusicon").classList.add("selected");
  // Detener la reproducción del audio actual
  stopCurrentAudio();
  let halloween = new RegExp('31/10');
  let toyday = new RegExp('24/12');
  let newyeareve = new RegExp('31/12');
  if (newyeareve.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/newyeareve.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("new year eve!!");
  } else if (toyday.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/toyday.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("chritsmas!!");
  } else if (halloween.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/halloween.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("halloween!!");
  } else if (/10:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/10am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("10am");
  } else if (/11:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/11am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("11am");
  } else if (/12:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/12pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("12pm");
  } else if (/13:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/1pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("1pm");
  } else if (/14:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/2pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("2pm");
  } else if (/15:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/3pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("3pm");
  } else if (/16:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/4pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("4pm");
  } else if (/17:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/5pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("5pm");
  } else if (/18:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/6pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("6pm");
  } else if (/19:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/7pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("7pm");
  } else if (/20:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/8pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("8pm");
  } else if (/21:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/9pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("9pm");
  } else if (/22:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/10pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("10pm");
  } else if (/23:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/11pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("11pm");
  } else if (/0:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/12am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("0am");
  } else if (/1:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/1am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("1am");
  } else if (/2:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/2am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("2am");
  } else if (/3:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/3am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("3am");
  } else if (/4:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/4am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("4am");
  } else if (/5:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/5am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("5am");
  } else if (/6:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/6am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("6am");
  } else if (/7:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/7am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("7am");
  } else if (/8:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/8am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("8am");
  } else if (/9:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/acnl/9am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("9am");
  }
}

// Wild World / City Folk Music , primero se comprueba si estamos en alguna fecha especial
function wwcfmusicon() {
  // Remover la clase "selected" de los otros botones
  document.getElementById("acnhmusicon").classList.remove("selected");
  document.getElementById("acnlmusicon").classList.remove("selected");
  lastFunction = 'wwcfmusicon';

  // Agregar la clase "selected" al botón actual
  document.getElementById("wwcfmusicon").classList.add("selected");
  // Detener la reproducción del audio actual
  stopCurrentAudio();
  let halloween = new RegExp('31/10');
  let toyday = new RegExp('24/12');
  let newyeareve = new RegExp('31/12');
  if (newyeareve.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/newyeareve.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("new year eve!!");
  } else if (toyday.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/toyday.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("chritsmas!!");
  } else if (halloween.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/halloween.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("halloween!!");
  } else if (/10:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/10am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("10am");
  } else if (/11:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/11am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("11am");
  } else if (/12:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/12pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("12pm");
  } else if (/13:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/1pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("1pm");
  } else if (/14:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/2pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("2pm");
  } else if (/15:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/3pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("3pm");
  } else if (/16:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/4pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("4pm");
  } else if (/17:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/5pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("5pm");
  } else if (/18:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/6pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("6pm");
  } else if (/19:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/7pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("7pm");
  } else if (/20:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/8pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("8pm");
  } else if (/21:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/9pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("9pm");
  } else if (/22:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/10pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("10pm");
  } else if (/23:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/11pm.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("11pm");
  } else if (/0:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/12am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("0am");
  } else if (/1:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/1am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("1am");
  } else if (/2:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/2am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("2am");
  } else if (/3:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/3am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("3am");
  } else if (/4:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/4am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("4am");
  } else if (/5:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/5am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("5am");
  } else if (/6:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/6am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("6am");
  } else if (/7:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/7am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("7am");
  } else if (/8:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/8am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("8am");
  } else if (/9:*$/g.test(sptime[0])) {
    let audio = new Audio('data/music/wwcf/9am.mp3');
    audio.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
    audio.play();
    // Asignar el objeto de audio actual a la variable currentAudio
    currentAudio = audio;
    console.log("9am");
  }
}