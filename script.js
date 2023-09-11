var h3=document.querySelector("h3");
var h4=document.querySelector("h4");
var color1=document.querySelector(".c1");
var color2=document.querySelector(".c2");

var body=document.getElementById("gradient");

function setGradient(){
	 body.style.background = 
						"linear-gradient(to right, " 
						+ color1.value 
						+ ", " 
						+ color2.value 
						+ ")";

					h3.textContent = body.style.background + ";"
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);