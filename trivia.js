var score = 0
var i = 1
var ans = 1
var happy = new Audio('sounds/good.mp3');
var sad = new Audio('sounds/bad.mp3')
var perfect = new Audio('sounds/pass.mp3')
var ok = new Audio('sounds/fail.mp3')
var horrible = new Audio('sounds/cricket.mp3')


function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
	
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        document.searchImage.src = "imagez/stanley.gif"
        happy.play();
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "imagez/loki.gif" 
    sad.play();
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        document.searchImage.src = "imagez/stanley.gif" 
        score++
    happy.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "imagez/loki.gif" 
    sad.play();
    }
    document.view.qscore.value=score
}
    
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        document.searchImage.src = "imagez/stanley.gif" 
        score++
        happy.play();
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "imagez/loki.gif" 
    sad.play();
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        document.searchImage.src = "imagez/stanley.gif"
        happy.play();
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "imagez/loki.gif" 
    sad.play();
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
       document.searchImage.src = "imagez/stanley.gif"
    happy.play();
       score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "imagez/loki.gif" 
    sad.play();
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
      document.searchImage.src = "imagez/stanley.gif"
      happy.play();  
      score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "imagez/loki.gif" 
    sad.play();
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        document.searchImage.src = "imagez/stanley.gif" 
        happy.play();
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "imagez/loki.gif" 
    sad.play();
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        document.searchImage.src = "imagez/stanley.gif" 
        happy.play();
        score++
    }
	  else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "imagez/loki.gif" 
    sad.play();
      }
    document.view.qscore.value=score
}
	else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        document.searchImage.src = "imagez/stanley.gif" 
        happy.play();
        score++
    }
	
    else {
        document.getElementById("question").value="You are wrong"
        document.searchImage.src = "imagez/loki.gif" 
    sad.play();
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        document.searchImage.src = "imagez/stanley.gif" 
        happy.play();
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
    document.searchImage.src = "imagez/loki.gif" 
    sad.play();
    }
    document.view.qscore.value=score
}
	ans++; 
}
        
function main(){
if (i===1) {
    document.view.qnum.value=i;
	document.view.question.value ="Which character is not an Avenger? \na)Black Widow \nb)Ant-Man \nc)Deadpool \nd)Silver Surfer";
    document.view.qans.value=""
    }
    
else if (i===2){ 
	document.view.qnum.value=i;
	document.view.question.value ="How many X-men movies are there currently? \na)13 \nb)12 \nc)8 \nd)18";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What war does Forrest Gump fight in? \na)World War 2 \nb)Korean War \nc)Vietnam War \nd)World War 1";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;
	document.view.question.value ="Who is the main antagonist in Harry Potter? \na)Dolores Umbridge \nb)Gellert Grindelwald \nc)Voldemort \nd)Fenrir Greyback";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;
	document.view.question.value ="Which spell in Harry Potter is used to unlock locks? \na)Accio \nb)Alohomora \nc)Expelliarmus \nd)Aguamenti";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;
	document.view.question.value ="How does Spiderman obtain his powers? \na)Bit by a radioactive spider \nb)Fell into radioactive waste \nc)Surgery \nd)Was used by scientists for experiments";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;
	document.view.question.value ="Who was the actor for Severus Snape in the Harry Potter movies? \na)Tom Hiddleston \nb)Daniel Radcliffe \nc)Eddie Redmayne \nd)Alan Rickman";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;
	document.view.question.value ="Who is Prongs in Harry Potter? \na)Harry Potter \nb)Sirius Black \nc)James Potter \nd)Severus Snape";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;
	document.view.question.value ="What is inside Davy Jones chest in The Pirates of The Caribbean Dead Mans Chest? \na)Gold \nb)A Heart \nc)A Brain \nd)Rum";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;
	document.view.question.value ="Who is the voice of Shrek in Shrek 2? \na)Mike Myers \nb)Eddie Murphy \nc)Ryan Reynolds  \nd)Mike Mitchell";
    document.view.qans.value=""
}
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz");
	if (score>=7) {
		document.searchImage.src = "imagez/yayaya.gif";
		alert("Congratulations!!! You are DA BOMB!");
	perfect.play();
    }
	
	else if (score >=5) {
		document.searchImage.src = "imagez/mediocrity.jpg";
		alert("Try again! You can do better");
	ok.play();
    }
	else {
	document.searchImage.src = "imagez/disappointment.png";
	alert("GO WATCH MORE MOVIES!!!!!!!");
	horrible.play();
    }
}
	i++; 
}

