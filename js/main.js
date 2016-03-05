
$( document ).ready(function() {

	$('#new-game').click(function(){ 
		$('#first-page').show();
		$('.boxes').show();
		$('.social').show();
		$('#musical-instrument-quiz').hide();	
	});

	$('.instrument_takequiz').click(function(){
		$('#musical-instrument-quiz').show();
		$('.boxes').hide();
		$('.social').hide();
		showquestion();
	});
    
	$('.answers').on('click', 'input', function(){
		var selection = $(this).attr("id"); // now we have 0, 1, 2, 3
		checkAnswer(selection);


	});

	
	
});  //jquery ends here

//question variables
var instrument_question1 = {
	q: "What musical instrument was widely used in the Renaissance and Baroque periods?",
	a:["bass clarient", "harpsichord", "piano", "lute"],
	correct: 1
};



var instrument_question2 = {
	q: "What instrument is usually not in an orchestra?",
	a:["banjo", "tuba", "french horn", "double bass"],
	correct: 0
}

var instrument_question3 = {
	q: "What is the lowest pitched double-reed instrument?",
	a:["obeo", "basson", "contrabasson", "piccolo heckelphone"],
	correct: 2
}

var instrument_question4 = {
	q: "Which instrument has a featured solo in Stravinsky’s 'Firebird Suite'?",
	a:["flute", "trombone", "basson", "clarinet"],
	correct: 2
}

var instrument_question5 = {
	q: "This brass instrument needs the player's hand in the bell in order to help control the pitch.",
	a:["trumpet", "french horn", "tuba", "trombone"],
	correct: 1
}

// global variables 

var qCount = 0;
var qCorrect = 0;
var instrument_questions = [instrument_question1, instrument_question2, instrument_question3, instrument_question4, instrument_question5];


function showquestion(){
	if(qCount >= instrument_questions.length){ // this check if you have reached the end of the quiz
		alert("Done! You got " + qCorrect + " correct.");
		qCount = 0;
		qCorrect = 0;
		$('#musical-instrument-quiz').hide();
		$('.boxes').show();
		$('.social').show();
	} else{
		var question = instrument_questions[qCount]; // has question loaded in, now target html
		$('.question').html(question.q);
		var html ="";
		for (var i = 0; i < question.a.length; i++) {
			html += "<li> <input id='"+ i +  "' name='answer' type='radio'/>";
			html += "<label for='"+ i +"'>" + question.a[i] + "</label> </li>";
		};
		$('.answers').html(html);
	}
};
	function checkAnswer(selection){
		var question = instrument_questions[qCount];
		if(selection == question.correct){
			qCorrect++;
		}
		else{
			
		}
		qCount++;
		showquestion();
	}


//New Game - make this a function and make it call and reset everything.
//Change the question title to the string of you're done! 








