

//problem: form submit automatically when submit is clicked
//solution: submit form at the appropraite time
const $userName = $("#username");
const $password = $("#password");
const $confirmPassword = $("#confirm_password");


$("form span").hide();


function userNameValid(){
	return $userName.val().length > 5;
}


function arePasswordValid(){
   return $password.val().length > 8;
}

function passwordMatching(){
	return $password.val() === $confirmPassword.val();
}

function canSubmit(){
	 return arePasswordValid() && passwordMatching() && userNameValid();
}

function userNameEvent(){
	if(userNameValid()){
		$userName.next().hide();
	}else{
		$userName.next().show();
	}
}

function passwordEvent(){
	if ( arePasswordValid() ){
		$password.next().hide();
	}else{
		$password.next().show();
	}
}


function confirmPasswordEvent(){
	if(passwordMatching()){
		$confirmPassword.next().hide();
	}else{
		$confirmPassword.next().show();
	}
}


function enableSubmitEvent(){
	 $("#submit").prop("disabled", !canSubmit());
}



//when event happens on username input
$userName.focus(userNameEvent).keyup(userNameEvent).keyup(enableSubmitEvent);



//when event happens on password input

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(userNameEvent).keyup(enableSubmitEvent);



//when event happens on confirm password

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent); 

enableSubmitEvent();