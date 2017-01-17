var Question = {
	text:'',
	choices:[],
	correctChoice:'',
	displayed:false,
	display: function() {
		$('.quiz-question').removeClass('hidden');
		$('.question').text(this.text);

		for (var i = 0; i < this.choices.length; i++) {
			var quizAnswer = $('.choice' + i);
			quizAnswer.text(this.choices[i + state.currentQuestion*4]);
		}
		this.displayed = true;
	},
	hide: function() {
		$('.question').text('');
		$('.choice').text('');
		$('.quiz-question').addClass('hidden');
		this.displayed = false;
	}
};

// function Question() {
// 	this.text ='';
// 	this.choices = [];
// 	this.correctChoice = '';
// 	this.displayed = false;
// 	this.display = function() {

// 		$('.quiz-question').text(this.text);

// 		for (var i = 0; i < this.choices.length; i++) {
// 			var quizAnswer = $('.choice' + i);
// 			quizAnswer.text(this.choices[i]);
// 		}
// 		this.displayed = true;
// 	};
// 	this.hide = function() {
// 		$('.quiz-question').text('');
// 		$('.choice').text('');
// 		this.displayed = false;
// 	};
// 	return this;
// }


var question1 = Object.create(Question);
question1.text = 'How many people were involved in the french revolution vs other major revloutions?';
question1.choices.push('1/10th the people', 'the same number of people', '10 times the people', '100 times the people');
question1.correctChoice = '10 times the people';

var question2 = Object.create(Question);
question2.text = 'Which one of these men was in both the french and american revolutions?';
question2.choices.push('Lafayette', 'Mirabeau', 'Tallyrand', 'Robespierre');
question2.correctChoice = 'Lafayette';


var question3 = Object.create(Question);
question3.text = 'Why does the socialist theory of the french revolution not hold up?';
question3.choices.push('Because america hates commies', 'Because socialism didn\'t exist back then', 
	'Because none of the revoluionaries tried to establish a socalist state', 
	'Because the relationships between the estates breaks down is the small details');
question3.correctChoice = 'Because the relationships between the estates breaks down is the small details';


var question4 = Object.create(Question);
question4.text = 'Which of these events had the largest effect on the course of the french revolution?';
question4.choices.push('Storming of the bastelle', 'Women\'s march on versailles', 
	'Thermidorian reaction', 'The arrival of the Breton club in paris');
question4.correctChoice = 'Women\'s march on versailles';


var question5 = Object.create(Question);
question5.text = 'What event signals the end of the radicalization of the french revolution?';
question5.choices.push('Execution of King Louie', 'Tennis court oath', 'Thermidorian reaction', 'The Girondins taking office');
question5.correctChoice = 'Lafayette';


var question6 = Object.create(Question);
question6.text = 'What was the primary justification for the reign of terror?';
question6.choices.push('Virtueless people needed to die', 'The war couldn\'t be won if trators remained in France', 
	'The sans-culotte\'s pressure on the national convention', 'The queen needed to see an example set so she would repent');
question6.correctChoice = 'France was losing the war';


var question7 = Object.create(Question);
question7.text = 'What area in europe most shaped international polotics during the french revolution?';
question7.choices.push('Austria', 'Prussia', 'France', 'Poland');
question7.correctChoice = 'Poland';


var question8 = Object.create(Question);
question8.text = 'How did Necar hide France\'s budget problems while publishing the compte rendu?</h2>';
question8.choices.push('By classifing france\'s war debt as \'The American\'s problem\'', 'By hiding it in off shore accounts', 
	'By having the catholic church take on the debt for france', 'By differentiating between normal and extraordinary expenditures');
question8.correctChoice = 'By differentiating between normal and extraordinary expenditures';


var question9 = Object.create(Question);
question9.text = 'Is studying the french revolution awesome?';
question9.choices.push('Yes', 'No');
question9.correctChoice = 'Yes';


var state = {
	currentQuestion:0,
	correct:0,
	incorrect:0,
	questions:[]
};


state.questions.push(question1, question2, question3, question4, question5, question6, question7, question8, question9);


//State modification 


//Rendering
var renderCurrentScore = function(state) {
	var score = $('.score');
	score.removeClass('hidden');
	score.text('Current question: ' + state.currentQuestion + ' out of ' + state.questions.length + 
		'\r Answered Correctly: ' + state.correct + 
		'\r Answered Incorrectly: ' + state.incorrect);
};	





$(function() {
	//Event listeners
	$('#intro').submit(function(event) {
		event.preventDefault();
		$(event.currentTarget).addClass('hidden');
		state.questions[state.currentQuestion].display();
	});

	$('.quiz-question').on('click', '.choice', function(event) {
		if(state.currentQuestion < (state.questions.length - 1)) {
			event.preventDefault();
			if(state.questions[state.currentQuestion].correctChoice == $(this).text()) {
				state.correct++;
			} else {
				state.incorrect++;
			}
			renderCurrentScore(state);
			state.questions[state.currentQuestion].hide();
			state.currentQuestion++;
			state.questions[state.currentQuestion].display();
		} else {
		// 	event.preventDefault();
		// 	$('#intro').removeClass('hidden');
		// 	$(event.currentTarget).addClass('hidden');
		// 	state.currentQuestion = 0;
		}
	});
})
