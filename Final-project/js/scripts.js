//generate the answers for the 8ball

//array of answers
var answers = [
	"It is certain",
	"Without a doubt",
	"Yes - definitely",
	"As I ee it, yes",
	"Most likely",
	"Outlook good",
	"Don't count on it",
	"My reply is no",
	"Yes",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
	"Ask again later",
	"Cannot predict now",
];

window.onload = function () {
	var eight = document.getElementById("eight");
	var answer = document.getElementById("answer");
	var Ask = document.getElementById("eight-ball");
	var question = document.getElementById("question");
	var h5 = document.querySelector("h5");
	var divCircle = (document.querySelector("#circle").style.animation =
		"spin1 1s linear infinite");
	Ask.addEventListener("click", function () {
		if (question.value.length < 1) {
			alert("Enter a question!");
		} else {
			eight.innerText = ""; 			

			var num = Math.floor(Math.random() * answers.length); 

			answer.innerText = answers[num];		

			question.hidden = true;

			h5.innerHTML = question.value;

			divCircle = document.querySelector("#circle").style.animation =
				"idle 6s linear infinite";
			
		}
	});
};
