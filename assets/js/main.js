var image =  document.getElementById("image");
var image = document.getElementById("question").innerHTML;
var btn1 =  document.getElementById("btn1");
var btn0 =  document.getElementById("btn0");
var btnb =  document.getElementById("btnb");
var imgNameArray = ['1','2','3','4','5','6','7','8','9','F1','F2','F3','F4','F5','F6']

var imgArray = new Array();
for (i = 0; i < imgNameArray.length; i++) {
	imgArray[i] = new Image();
	imgArray[i].id = 'image'
	imgArray[i].src = 'assets/img/'+imgNameArray[i]+'.png';
}

function imageAdd(img) {
	document.getElementById("question").innerHTML="";
	document.getElementById("question").appendChild(imgArray[img]);
}
imageAdd(0)

function dangerStyle() {
	document.body.style.backgroundColor = "#C53131";
	document.getElementById("major").style.color = "#EDAEAE";
	document.getElementById("break").style.backgroundColor = "#EDAEAE";
	document.getElementById("footer").style.borderColor = "#EDAEAE";
	document.getElementById("footer-wrapper").style.color = "#EDAEAE";
	document.getElementById("btn_back").style.visibility = "hidden";
	a_tags = document.getElementsByTagName("a");
	for (i = 0; i < a_tags.length; i++) {a_tags[i].style.color = "#EDAEAE";}
	css = 'a:hover {color: #600B00 !important;}';
	style = document.createElement('style');
	style.appendChild(document.createTextNode(css));
	document.getElementsByTagName('head')[0].appendChild(style);
	document.getElementsByClassName("heart")[0].style.color = "#600B00";
	btn1.style.visibility = "hidden";
	btn0.style.visibility = "hidden";
	btnb.style.visibility = "hidden";
}

function nextQuestion(bool, qus) {
	if (qus == 0) {
		image.src = imgArray[1];
		btn1.setAttribute("onClick", "nextQuestion(1,1);");
		btn0.setAttribute("onClick", "nextQuestion(0,1);");
		btnb.style.visibility = "hidden";
	}else if (qus == 1) {
		btnb.style.visibility = "visible";
		if (bool == 1) {
			imageAdd(1);
			btn1.setAttribute("onClick", "nextQuestion(1,2);");
			btn0.setAttribute("onClick", "nextQuestion(0,2);");
			btnb.setAttribute("onClick", "nextQuestion(0,0);");
		} else if (bool == 0) {
			imageAdd(2);
			btn1.setAttribute("onClick", "nextQuestion(1,3);");
			btn0.setAttribute("onClick", "nextQuestion(0,3);");
			btnb.setAttribute("onClick", "nextQuestion(0,0);");
		}
	} else if (qus == 2) {
		btnb.style.visibility = "visible";
		if (bool == 1) {
			imageAdd(3);
			btn1.setAttribute("onClick", "nextQuestion(1,4);");
			btn0.setAttribute("onClick", "nextQuestion(0,4);");
			btnb.setAttribute("onClick", "nextQuestion(1,1);");
		} else if (bool == 0) {
			imageAdd(9);
			dangerStyle()
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">You don’t truly need this item.</span>';
		}
	} else if (qus == 3) {
		btnb.style.visibility = "visible";
		if (bool == 1) {
			imageAdd(10);
			dangerStyle()
		} else if (bool == 0) {
			imageAdd(4);
			btn1.setAttribute("onClick", "nextQuestion(1,5);");
			btn0.setAttribute("onClick", "nextQuestion(0,5);");
			btnb.setAttribute("onClick", "nextQuestion(0,1);");
		}
	} else if (qus == 4) {
		btnb.style.visibility = "visible";
		if (bool == 1) {
			imageAdd(5);
			btn1.setAttribute("onClick", "nextQuestion(1,6);");
			btn0.setAttribute("onClick", "nextQuestion(0,6);");
			btnb.setAttribute("onClick", "nextQuestion(1,2);");
		} else if (bool == 0) {
			imageAdd(2);
			btn1.setAttribute("onClick", "nextQuestion(1,3);");
			btn0.setAttribute("onClick", "nextQuestion(0,3);");
			btnb.setAttribute("onClick", "nextQuestion(1,2);");
		}
	} else if (qus == 5) {
		btnb.style.visibility = "visible";
		if (bool == 1) {
			imageAdd(11);
			dangerStyle()
		} else if (bool == 0) {
			imageAdd(12);
			dangerStyle()
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">If it’s something you really want.</span>';
		}
	} else if (qus == 6) {
		btnb.style.visibility = "visible";
		if (bool == 1) {
			imageAdd(9);
			dangerStyle()
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">You don’t truly need this item.</span>';
		} else if (bool == 0) {
			imageAdd(8);
			btn1.setAttribute("onClick", "nextQuestion(1,9);");
			btn0.setAttribute("onClick", "nextQuestion(0,9);");
			btnb.setAttribute("onClick", "nextQuestion(1,4);");
		}
	} else if (qus == 7) {
		btnb.style.visibility = "visible";
		if (bool == 1) {
			imageAdd(7);
			btn1.setAttribute("onClick", "nextQuestion(1,8);");
			btn0.setAttribute("onClick", "nextQuestion(0,8);");
			btnb.setAttribute("onClick", "nextQuestion(0,9);");
		} else if (bool == 0) {
			imageAdd(13);
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">So you know you are getting a good deal.</span>';
			dangerStyle()
		}
	} else if (qus == 8) {
		if (bool == 1) {
			imageAdd(14);
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
			btn1.style.visibility = "hidden";
			btn0.style.visibility = "hidden";
			btnb.style.visibility = "hidden";
		} else if (bool == 0) {
			imageAdd(9);
			dangerStyle()
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">Congrats! You prevented an impulse purchase and saved money!</span>';
		}
	} else if (qus == 9) {
		btnb.style.visibility = "visible";
		if (bool == 1) {
			imageAdd(12);
			document.getElementById("final_text").innerHTML='<span style="color: #EDAEAE;">If it’s something you really want.</span>';
			dangerStyle()
		} else if (bool == 0) {
			imageAdd(6);
			btn1.setAttribute("onClick", "nextQuestion(1,7);");
			btn0.setAttribute("onClick", "nextQuestion(0,7);");
			btnb.setAttribute("onClick", "nextQuestion(0,6);");
		}
	}
}