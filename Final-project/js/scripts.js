//generate the answers for the ball

//array of answers
var answers = [
	"It is certain",
	"Without a doubt",
	"Yes - definitely",
	"As I ee it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
	"Ask again later",
	"Cannot predict now",
];
// when window.onload
// The onload property processes load events after the element has finished loading
window.onload = function () {
	var eight = document.getElementById("eight");
	var answer = document.getElementById("answer");
	var Ask = document.getElementById("eight-ball");
	var question = document.getElementById("question");
	var h5 = document.querySelector("h5");
	var divCircle = document.querySelector("#circle").style.animation =
		"spin1 1s linear infinite";
	// when the time interval  is high the animation is slow motion  and to the revers the lower the interval the animation keep continue

	Ask.addEventListener("click", function () {
		if (question.value.length < 1) {
			alert("Enter a question!");
		} else {
			eight.innerText = ""; // 8 means a place holder of the answer

			// Math.random() returns a random number between 0 (inc) and 1 (exc):
			// Math.floor() rounds a number DOWN to the nearest integer:

			var num = Math.floor(Math.random() * answers.length); //to get a random answers message
			// var num = Math.floor(0.6 * 14);
			// var num = Math.floor(8.4); it gives me  a number down to the nerest int 
			// var num = 8

			answer.innerText = answers[num];

			// question.remove();

			question.hidden = true;

			h5.innerHTML = question.value;

			divCircle = document.querySelector("#circle").style.animation =
				"idle 6s linear infinite";
			
		}
	});
};
