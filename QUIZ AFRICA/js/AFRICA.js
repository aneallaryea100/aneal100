const quizAfrica = [
   {
   	question: "Which language runs in a web browser?",
         	a:"Java",
         	b: "C",
         	c:"Python",
         	d:"javascript",
         	correct: "d",
   }, 

   {
   	question: "What is the capital city of Ghana?",
   	a:"Kumasi",
   	b:"Cairo",
   	c:"Accra",
   	d:"Tamale",
   	correct: "c",
   }, 

   {
   	question: "What is the capital city of Ghana?",
   	a:"Kumasi",
   	b:"Cairo",
   	c:"Accra",
   	d:"Tamale",
   	correct: "c",
   }, 


  {
   	question: "What is the capital city of Ghana?",
   	a:"Kumasi",
   	b:"Cairo",
   	c:"Accra",
   	d:"Tamale",
   	correct: "c",
   }, 

   {
   	question: "What is the capital city of Ghana?",
   	a:"Kumasi",
   	b:"Cairo",
   	c:"Accra",
   	d:"Tamale",
   	correct: "c",
   }, 

];

/*Getting all required element*/

const quizContainer = document.getElementById('con_quiz')
const questionsAfric = document.getElementById('question')
const desertQuest = document.querySelectorAll('.desert')
const first_lab = document.getElementById('first_lab')
const second_lab = document.getElementById('second_lab')
const third_lab = document.getElementById('third_lab')
const fourth_lab = document.getElementById('fourth_lab')
const submitBtn = document.getElementById('submit')

let activeQuiz = 0;
let score = 0;

currentQuiz();

/*====== FUNCTION FOR CURRENT QUIZ ======*/
function currentQuiz(){

	unselectedOptions();

	const quizAfricaData = quizAfrica[activeQuiz];

	questionsAfric.innerText = quizAfrica.question
	first_lab.innerText =quizAfrica.a
	second_lab.innerText =quizAfrica.b
	third_lab.innerText =quizAfrica.c
	fourth_lab.innerText =quizAfrica.d
}


/*======= UNSELECTED OPTIONS FUNCTION =========*/
function unselectedOptions(){
	desertQuest.forEach(desertQue => desertQue.checked = false);
}


/*======= SELECTED OPTIONS FUNCTION =========*/
function selectedOption(){
	let answer;
	desertQuest.forEach(desertQue => {
		if(desertQue.checked){
			answer = desertQue.id
		}
	})
	return answer;
}


/*============ WHEN THE USER CLICKED THE SUBMIT BUTTON ===============*/
submitBtn.addEventListener('click', () => {
	const selected = selectedOption();

	if(selected){
		if(selected === quizAfrica[activeQuiz].correct){
			score++
		}
		activeQuiz++

		if(activeQuiz < quizAfrica.length){
			currentQuiz()
		}else{
			quizContainer.innerHTML = `
                           <h2>You answered ${score} out of ${quizAfrica.length} 
                           questions correctly.</h2>

                           <bUTTON onclick="location.reload()">Restart</bUTTON>
			`

		}
	}
});




