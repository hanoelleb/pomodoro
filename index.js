const WORK_TIME = 1500; //25 minutes 
const SHORT_TIME = 300; //5 minutes
const LONG_TIME = 600; //10 minutes

var CURRENT_TIME = WORK_TIME;
var CHOSEN_TIME = CURRENT_TIME;

var RUNNING = true;

var handler = function() {
  var currMins = parseInt(CURRENT_TIME / 60);
  var currSecs = parseInt(CURRENT_TIME % 60);
  document.getElementById('timer').textContent = 'Time: ' + 
      (currMins < 10 ? "0" + currMins : currMins) + ":" 
          + (currSecs < 10 ? "0" + currSecs : currSecs);
  CURRENT_TIME--;
};

$(document).ready( function() {
    var timer = setInterval(handler, 1000);

    $('#explain').hide();

    $('#about').click(function() {
        $('#explain').show();
	$('#about').hide();
    });

    $('#close').click(function() {
        $('#explain').hide();
	$('#about').show();
    });

    $('#work').click( function() {
        CURRENT_TIME = WORK_TIME;
        CHOSEN_TIME = CURRENT_TIME;
	handler();
        $('#Pomo').attr('src', 'tomato-work.png');

    });

    $('#short').click( function() {
        CURRENT_TIME = SHORT_TIME;
        CHOSEN_TIME = CURRENT_TIME;
	handler();
        $('#Pomo').attr('src', 'tomato-short.png');
    });

    $('#long').click( function() {
        CURRENT_TIME = LONG_TIME;
        CHOSEN_TIME = CURRENT_TIME;
	handler();
        $('#Pomo').attr('src', 'tomato-long.png')
    });

   $('#start').click( function() {
       if (!RUNNING) {
           timer = setInterval(handler, 1000);
           RUNNING = true;
       }
   });

   $('#stop').click( function() {
       RUNNING = false;
       clearInterval(timer);
   });

   $('#reset').click( function() {
       CURRENT_TIME = CHOSEN_TIME;
       clearInterval(timer);
       if (!RUNNING)
           handler();
       else
	   timer = setInterval(handler, 1000);
   });
});
