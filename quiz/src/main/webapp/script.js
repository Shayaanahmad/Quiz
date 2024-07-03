
const questions = [
	{
		
		question: "What does HTML stand for?",
		answer: [
			{text: "A. Hyper Type Multi Language",correct: "false"},
			{text: "B. Hyper Text Multiple Language",correct: "false"},
			{text: "C. Hyper Text Markup Language",correct: "true"},
			{text: "D. Home Text Multi Language",correct: "false"}
			]
	},
	{
		
		question: "What does CSS stand for?",
		answer: [
			{text: "A. Computer Style Sheet",correct: "false"},
			{text: "B. Code Style Sheet",correct: "false"},
			{text: "C. Cascading Style Sheet",correct: "true"},
			{text: "D. Cascading Service Sheet",correct: "false"}
			]
	},
	{
		
		question: "What does PHP stand for?",
		answer:[
			{text: "A. HyperType Preprocessor",correct: "false"},
			{text: "B. Preprocessor HyperText",correct: "false"},
			{text: "C. Hypertext Preprocessor",correct: "true"},
			{text: "D. HomeText Preprocessor",correct: "false"}
			]
	},
	{
		
		question: "What does SQL stand for?",
		answer: [
			{text: "A. Service Query Language",correct: "false"},
			{text: "B. Structured Query Language",correct: "true"},
			{text: "C. Semantic Query Language",correct: "false"},
			{text: "D. Structured Quantum Language",correct: "false"}
			]
	},
	{
		
		question: "What does XML stand for?",
		answer: [
			{text: "A. XQuery Markup Language",correct: "false"},
			{text: "B. Extensible Multiple Language",correct: "false"},
			{text: "C. Extensible Multi Language",correct: "false"},
			{text: "D. Extensible Markup Language",correct: "true"}
			]
	}
];
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');


startBtn.onclick = () => {
	popupInfo.classList.add('active');
	main.classList.add('active');
}
exitBtn.onclick = () => {
	popupInfo.classList.remove('active');
	main.classList.remove('active');
}

continueBtn.onclick = () => {
		quizSection.classList.add('active');
		popupInfo.classList.remove('active');
		main.classList.remove('active');
		quizBox.classList.add('active');
	
	const questionElement = document.getElementById("question-text");
	const answerButtons = document.getElementById("option-list");
	const nextBtn = document.getElementById("next-btn");
	
	let currentQuestionIndex=0;
	let score=0;
	
function startQuiz(){
	currentQuestionIndex= 0;
	score=0;
	nextBtn.innerHTML = "Next";
		showQuestion();
		}
	function showQuestion(){
		resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex+1;
	questionElement.innerHTML = questionNo + "." + currentQuestion.question;
	
	currentQuestion.answer.forEach(answers =>{
		const button = document.createElement("button");
		button.innerHTML =  answers.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
	})
}

function resetState(){
	nextBtn.style.display = "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
}
startQuiz();

	
}
	
