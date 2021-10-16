const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
	if(event.code === "Enter") {
		search();
	}
});




function search(){
	const input = searchInput.value;

window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1CHBF_enGH814GH814&oq=" + input + "&aqs=chrome..69i57j46i433i512j0i433i512j0i512j46i512j0i512l5.8474j0j15&sourceid=chrome&ie=UTF-8"
}



/*=============  show and remove modal box ===========*/

const customizeChrome = document.getElementById('real__modal');
const cancelBtn = document.getElementById('btn-cancel');
const doneBtn = document.getElementById('btn-done');
const modalBox = document.getElementById('modal__wrapper');



function showModal(){
    modalBox.classList.add('show__modal');
}

function removeModal(){
	modalBox.classList.remove('show__modal');
}


if(customizeChrome){
	customizeChrome.addEventListener('click', showModal );
}


if(cancelBtn){
	cancelBtn.addEventListener('click', removeModal );
}


if(doneBtn){
	doneBtn.addEventListener('click', removeModal );
}

