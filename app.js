var state = {
	currentQuestion:0,
	correct:0,
	incorrect:0
};


//State modification 
var checkQuestion = function() {


};

var nextQuestion = function() {

};

var startQuiz = function(state, event) {
	    $(event.currentTarget).addClass('hidden');
	    var questions = $('.quiz').children();
	    $(questions[0]).removeClass('hidden');
	    state.currentQuestion = 1;
};


//Rendering
var renderQuestion = function(state) {

};




//Event listeners
$('#intro').submit(function(event) {
	    event.preventDefault();
	    startQuiz(state, event);
});

$('.quiz-question').on('click', '.choice', function(event) {
	event.preventDefault();
	checkQuestion(state, event);
});