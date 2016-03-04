
$( document ).ready(function() {

	$('#new-game').click(function(){ 
		$('#first-page').show();
		$('.boxes').show();
		$('.social').show();
		$('#musical-instrument-quiz').hide();	
	});

	$('.takequiz').click(function(){
		takeInstrumentQuiz();
	});
    


	//Biggest Question... How do I assign write or wrong answers. 
	// Right now, I only have it so that when somone clicks on 
	//any button that isn't the "new game" button, they are taken to the next question.
	$(".question").text(instrument_question1.question);
	
});  //jquery ends here

//question variables
var instrument_question1 = {
	question: "What musical instrument was widely used in the Renaissance and Baroque periods?",
	answer:["bass clarient", "harpsichord", "piano", "lute"],
	correct: 1
};


answers();
	function answers(){
		var answer_array = instrument_question1.answer;
		for(var i=0; i < answer_array.length; i++){
			var answer = answer_array[i];
			var answer_text = "<li class='col-md-6'> <input class='btn' type='submit' value='" + answer + "'> </li>";
			$('.answers ul').append(answer_text);
		};

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


function takeInstrumentQuiz(){
	


};






