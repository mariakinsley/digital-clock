// creating variables with all i need,hora,seconds, minutes
setInterval(function()
 {
  var ampm = "AM"
  var today = new Date()
  var hours = today.getHours()
  var minutes = today.getMinutes()
  var seconds = today.getSeconds()

// setting if staments

  if (hours < 10) {
  hours = "0" + hours;
  }
  if (minutes < 10) {
  minutes = "0" + minutes;
  }
 if (seconds < 10) {
  seconds = "0" + seconds;

  }
  if (hours > 12) {
      hours = hours - 12;
      ampm = "PM";
  }

  if (hours === 0) {
      hours = 12;
  }
  var clockDiv = document.getElementById('clock');
  clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds + ampm

  },1000);

  // at the end i add a var with ampm the added in the var clockDiv and add an if staments for pm am is in by default.
