const quizAfrica = [
   {
   	question: "Which country is Cyrenaica a part?",
         	a:"Tunisia",
         	b: "Egypt",
         	c:"Lybia",
         	d:"Tanzania",
         	correct: "c",
   }, 

   {
   	question: "The longest African river which emptying into the indian Ocean is?",
   	a:"River Nile",
   	b:"Zambezi river",
   	c:"Niger River",
   	d:"Benue River",
   	correct: "b",
   }, 

   {
   	question: "The Northernmost city in Africa is ?",
   	a:"Fes",
   	b:"Cairo",
   	c:"Rabat",
   	d:"Bizerte",
   	correct: "d",
   }, 


  {
   	question: "The westernmost city of Africa?",
   	a:"Conakry",
   	b:"Dakar",
   	c:"Porto-Novo",
   	d:"Gao",
   	correct: "b",
   }, 

   {
   	question: "What is the area of land in Egypt which is below sea level?",
   	a:"Qattara Depression",
   	b:"Denakil Depression",
   	c:"Sebkha Tah",
   	d:"Lake Moeris",
   	correct: "a",
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

	questionsAfric.innerText = quizAfricaData.question
	first_lab.innerText =quizAfricaData.a
	second_lab.innerText =quizAfricaData.b
	third_lab.innerText =quizAfricaData.c
	fourth_lab.innerText =quizAfricaData.d
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




