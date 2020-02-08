var image =  document.getElementById("image");
var btn1 =  document.getElementById("btn1");
var btn0 =  document.getElementById("btn0");

function dangerStyle() {
	document.body.style.backgroundColor = "#C53131";
	document.getElementById("major").style.color = "#EDAEAE";
	document.getElementById("break").style.backgroundColor = "#EDAEAE";
	document.getElementById("footer").style.borderColor = "#EDAEAE";
	document.getElementById("footer-wrapper").style.color = "#EDAEAE";
	a_tags = document.getElementsByTagName("a");
	for (i = 0; i < a_tags.length; i++) {a_tags[i].style.color = "#EDAEAE";}
	css = 'a:hover {color: #600B00 !important;}';
	style = document.createElement('style');
	style.appendChild(document.createTextNode(css));
	document.getElementsByTagName('head')[0].appendChild(style);
	document.getElementsByClassName("heart")[0].style.color = "#600B00";
}

function nextQuestion(bool, qus) {
	console.log(bool, qus)
	if (qus == 1) {
		if (bool == 1) {
			image.src = "assets/img/2.png";
			btn1.setAttribute("onClick", "nextQuestion(1,2);");
			btn0.setAttribute("onClick", "nextQuestion(0,2);");
		} else if (bool == 0) {
			image.src = "assets/img/3.png";
			btn1.setAttribute("onClick", "nextQuestion(1,3);");
			btn0.setAttribute("onClick", "nextQuestion(0,3);");
		}
	} else if (qus == 2) {
		if (bool == 1) {
			image.src = "assets/img/4.png";
			btn1.setAttribute("onClick", "nextQuestion(1,4);");
			btn0.setAttribute("onClick", "nextQuestion(0,4);");
		} else if (bool == 0) {
			image.src = "assets/img/F1.png";
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			dangerStyle()
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">You don’t truly need this item.</span>';
		}
	} else if (qus == 3) {
		if (bool == 1) {
			image.src = "assets/img/F2.png";
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			dangerStyle()
		} else if (bool == 0) {
			image.src = "assets/img/5.png";
			btn1.setAttribute("onClick", "nextQuestion(1,5);");
			btn0.setAttribute("onClick", "nextQuestion(0,5);");
		}
	} else if (qus == 4) {
		if (bool == 1) {
			image.src = "assets/img/6.png";
			btn1.setAttribute("onClick", "nextQuestion(1,6);");
			btn0.setAttribute("onClick", "nextQuestion(0,6);");
		} else if (bool == 0) {
			image.src = "assets/img/3.png";
			btn1.setAttribute("onClick", "nextQuestion(1,3);");
			btn0.setAttribute("onClick", "nextQuestion(0,3);");
		}
	} else if (qus == 5) {
		if (bool == 1) {
			image.src = "assets/img/F3.png";
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			dangerStyle()
		} else if (bool == 0) {
			image.src = "assets/img/F5.png";
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			dangerStyle()
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">So you know you are getting a good deal.</span>';
		}
	} else if (qus == 6) {
		if (bool == 1) {
			image.src = "assets/img/F1.png";
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			dangerStyle()
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">You don’t truly need this item.</span>';
		} else if (bool == 0) {
			image.src = "assets/img/9.png";
			btn1.setAttribute("onClick", "nextQuestion(1,9);");
			btn0.setAttribute("onClick", "nextQuestion(0,9);");
		}
	} else if (qus == 7) {
		if (bool == 1) {
			image.src = "assets/img/8.png";
			btn1.setAttribute("onClick", "nextQuestion(1,8);");
			btn0.setAttribute("onClick", "nextQuestion(0,8);");
		} else if (bool == 0) {
			image.src = "assets/img/F5.png";
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">So you know you are getting a good deal.</span>';
			dangerStyle()
		}
	} else if (qus == 8) {
		if (bool == 1) {
			image.src = "assets/img/F6.png";
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			document.body.style.backgroundColor = "#79BE87";
			document.getElementById("major").style.color = "#B5FFC2";
			document.getElementById("break").style.backgroundColor = "#B5FFC2";
			document.getElementById("footer").style.borderColor = "#B5FFC2";
			document.getElementById("footer-wrapper").style.color = "#B5FFC2";
			a_tags = document.getElementsByTagName("a");
			for (i = 0; i < a_tags.length; i++) {a_tags[i].style.color = "#B5FFC2";}
			css = 'a:hover {color: #2B4430 !important;}';
			style = document.createElement('style');
			style.appendChild(document.createTextNode(css));
			document.getElementsByTagName('head')[0].appendChild(style);
			document.getElementById("final_text").innerHTML='<span style="color: #B5FFC2;">Enjoy your purchase, smart spender!</span>';
		} else if (bool == 0) {
			image.src = "assets/img/F1.png";
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			dangerStyle()
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">Congrats! You prevented an impulse purchase and saved money!</span>';
		}
	} else if (qus == 9) {
		if (bool == 1) {
			image.src = "assets/img/F4.png";
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">If it’s something you really want.</span>';
			dangerStyle()
		} else if (bool == 0) {
			image.src = "assets/img/7.png";
			btn1.setAttribute("onClick", "nextQuestion(1,7);");
			btn0.setAttribute("onClick", "nextQuestion(0,7);");
		}
	}
}