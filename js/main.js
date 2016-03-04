
$( document ).ready(function() {

	$('#new-game').click(function(){ //this isn't work :( why?
		$('#first-page').show();
		$('.instrument-question1').hide();
		$('.instrument-question2').hide();
		$('.instrument-question3').hide();
		$('.instrument-question4').hide();
		$('.instrument-question5').hide();
	});
    
	$('.musicinstrumentquiz').click(function(){
		$('#musical-instrument-quiz').show();
		$('.instrument-question1').show();
		$('.instrument-question2').hide();
		$('.instrument-question3').hide();
		$('.instrument-question4').hide();
		$('.instrument-question5').hide();
		$('.boxes').hide();
		$('.social').hide();

	});

	//below: when they click on any button in question 1, 
	// they will be brought to the next question

	$('.instrument-question1').click(function(){
		$('.instrument-question2').show();
		$('.instrument-question1').hide();

	});

	$('.instrument-question2').click(function(){
		$('.instrument-question3').show();
		$('.instrument-question2').hide();

	});

	$('.instrument-question3').click(function(){
		$('.instrument-question4').show();
		$('.instrument-question3').hide();

	});

	$('.instrument-question4').click(function(){
		$('.instrument-question5').show();
		$('.instrument-question4').hide();

	});

	$('.instrument-question5').click(function(){
		$('.instrument-question5').hide();
		// $('#musical-instrument-quiz).hide();
		$('.complete-boxed').show();

	});









});  //jquery ends here
