var state = {
	currentQuestion:0,
	correct:0,
	incorrect:0
};


//State modification 
var correctAnswer = function(state) {
	state.correct += 1;
};	

var incorrectAnswer = function(state) {
	state.incorrect += 1;
};	


var nextQuestion = function() {

};

var startQuiz = function(state, event) {
	    state.currentQuestion = 1;
};


//Rendering
var renderQuestion = function(state) {

};



//Event listeners
$('#intro').submit(function(event) {
		event.preventDefault();
		$(event.currentTarget).addClass('hidden');
	    var questions = $('.quiz').children();
	    startQuiz(state, event);
});

$('.quiz-question').on('click', '.choice', function(event) {
	event.preventDefault();
	if($(event.currentTarget).hasClass('correct')) {
		correctAnswer(state);
	} else {
		incorrectAnswer(state);
	}
});