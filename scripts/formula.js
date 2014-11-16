function updateFormula() {
	document.getElementById("formula_disp").innerHTML = "$$" + document.getElementById("formula_input").value + "$$";
	MathJax.Hub.Typeset();

	if(document.getElementById("formula_input").value.replace(/ /g,'') == answer) {
		document.getElementById("correct_msg").style.visibility = "visible";
	document.getElementById("next_button").style.visibility = "visible";
		document.getElementById("formula_input").disabled = true;
	} else {
		document.getElementById("correct_msg").style.visibility = "hidden";
	}
}

function reset() {
	document.getElementById("formula_input").value = "";
	document.getElementById("formula_input").disabled = false;
	document.getElementById("correct_msg").style.visibility = "hidden";
	document.getElementById("next_button").style.visibility = "hidden";
	loadQuestion();
	questionNumber++;
}

function loadQuestion() {
	var data = JSON.parse(questions);
	document.getElementById("question").innerHTML = "<b>" + data.questions[questionNumber].question + "</b>";
	answer = data.questions[questionNumber].answer;
	document.getElementById("info").innerHTML = data.questions[questionNumber].info;
	MathJax.Hub.Typeset();
}