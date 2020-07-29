const WORK_TIME = 1500; //25 minutes 
const SHORT_TIME = 300; //5 minutes
const LONG_TIME = 600; //10 minutes

$(document).ready( function() {
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
        $('#timer').text('Time: 25:00');
        $('#Pomo').attr('src', 'tomato-work.png');
    });

    $('#short').click( function() {
        $('#timer').text('Time: 5:00');
        $('#Pomo').attr('src', 'tomato-short.png');
    });

    $('#long').click( function() {
        $('#timer').text('Time: 10:00');
        $('#Pomo').attr('src', 'tomato-long.png')
    });
});
