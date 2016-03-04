
$( document ).ready(function() {

	$('#new-game').click(function(){ //this isn't work :( why?
		$('#first-page').show();
		$('.boxes').show();
		$('.social').show();
		$('#musical-instrument-quiz').hide();	
	});
    






	//Biggest Question... How do I assign write or wrong answers. 
	// Right now, I only have it so that when somone clicks on 
	//any button that isn't the "new game" button, they are taken to the next question.

});  //jquery ends here

//question variables

var instrument-question1 = {
	q: "What musical instrument was widely used in the Renaissance and Baroque periods?",
	a:["bass clarient", "harpsichord", "piano", "lute"],
	correct: 1
}

var instrument-question2 = {
	q: "What instrument is usually not in an orchestra?",
	a:["banjo", "tuba", "french horn", "double bass"],
	correct: 0
}

var instrument-question3 = {
	q: "What is the lowest pitched double-reed instrument?",
	a:["obeo", "basson", "contrabasson", "piccolo heckelphone"],
	correct: 1
}

var instrument-question4 = {
	q: "Which instrument has a featured solo in Stravinsky’s "Firebird Suite"?",
	a:["flute", "trombone", "basson", "clarinet"],
	correct: 1
}

var instrument-question5 = {
	q: "This brass instrument needs the player's hand in the bell in order to help control the pitch.",
	a:["trumpet", "french horn", "tuba", "trombone"],
	correct: 1
}

// global variables 

var qCount = 0;
var qCorrect = 0;
var questions = [instrument-question1, instrument-question2, instrument-question3, instrument-question4, instrument-question5];



function startGame(){
	$('.musicinstrumentquiz').click(function(){
		
	});


});




