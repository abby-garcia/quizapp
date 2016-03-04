
$( document ).ready(function() {

	$('#new-game').click(function(){ //this isn't work :( why?
		$('#first-page').show();
		$('.boxes').show();
		$('.social').show();
		$('#musical-instrument-quiz').hide();	
	});
    
	$('.musicinstrumentquiz').click(function(){
		$('#musical-instrument-quiz').show();
		$('.instrument-question1').show();
		$('.question1-countdown').html('Question 1/5');
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
		$('.question2-countdown').html('Question 2/5');

	});

	$('.instrument-question2').click(function(){
		$('.instrument-question3').show();
		$('.instrument-question2').hide();
		$('.question3-countdown').html('Question 3/5');

	});

	$('.instrument-question3').click(function(){
		$('.instrument-question4').show();
		$('.instrument-question3').hide();
		$('.question4-countdown').html('Question 4/5');

	});

	$('.instrument-question4').click(function(){
		$('.instrument-question5').show();
		$('.instrument-question4').hide();
		$('.question5-countdown').html('Question 5/5');

	});

	$('.instrument-question5').click(function(){
		$('.instrument-question5').hide();
		// $('#musical-instrument-quiz).hide();
		$('.complete-boxed').show();

	});



	//Biggest Question... How do I assign write or wrong answers. 
	// Right now, I only have it so that when somone clicks on 
	//any button that isn't the "new game" button, they are taken to the next question.









});  //jquery ends here
