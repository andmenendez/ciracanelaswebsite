window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function updateView() {
	document.getElementById("title_name").style.transition = "0.5s";
	document.getElementById("title_name").display = "hidden";
	document.getElementById("title_name").style.opacity = 0;

	document.getElementById("title_slogan").style.transition = "0.5s";
	document.getElementById("title_slogan").display = "hidden";
	document.getElementById("title_slogan").style.opacity = 0;

	document.getElementById("title_therapy").style.transition = "0.5s";
	document.getElementById("title_therapy").display = "hidden";
	document.getElementById("title_therapy").style.opacity = 0;


	document.getElementById("continue").display = "hidden";
	document.getElementById("continue").style.opacity = 0;

	document.getElementById("continue_text").display = "hidden";
	document.getElementById("continue_text").style.opacity = 0;

	document.getElementById("main").style.height = "0vh";
	document.getElementById("main").style.opacity = 0;
 	
 	setTimeout(function() {
 		document.getElementById("all").style.overflow = "visible";
	    document.body.style.overflowY = "auto";
	}, 750);

	document.querySelectorAll(".content").forEach((el) => {
		el.style.opacity = "1";
	});
}
// document.getElementById("continue_text").addEventListener("click", updateView());

function turnOff(element) {
	element.style.opacity = 0;
}
function turnOn(element) {
	document.getElementById("card_" + element).style.opacity = 1;
	document.getElementById("nav_" + element).classList.add("nav_selected");
}
function turnAllOff() {
	document.querySelectorAll(".card").forEach(x => {
		x.style.opacity = 0;
	});

	document.querySelectorAll(".nav").forEach(x => {
		x.classList.remove("nav_selected");
	});
}
function turnOffContact() {
	document.getElementById("card_contact").style.transform = "translateY(1000px)";
}

document.getElementById("nav_about").addEventListener("click", function() {
	turnAllOff();
	turnOffContact();
	turnOn("about");
});
document.getElementById("nav_treatment").addEventListener("click", function() {
	turnAllOff();
	turnOffContact();
	turnOn("treatment");
});
document.getElementById("nav_sessions").addEventListener("click", function() {
	turnAllOff();
	turnOffContact();
	turnOn("sessions");
});
document.getElementById("nav_qualifications").addEventListener("click", function() {
	turnAllOff();
	turnOffContact();
	turnOn("qualifications");
});
document.getElementById("nav_contact").addEventListener("click", function() {
	turnAllOff();
	document.getElementById("card_contact").style.transform = "translateY(0px)";
	turnOn("contact");
});
window.addEventListener('mousewheel', updateView);








