window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  window.tabindex="-1"
}

	var title_name = document.getElementById("title_name1")
	var letters_title_name = title_name.textContent.split("")
	while(title_name.hasChildNodes()) {
		title_name.removeChild(title_name.firstChild);
	}


	var letters = letters_title_name;

	for(var i = 0; i < letters.length; i++) {
	  var letter = document.createElement('span');
	  var style = 'opacity 1.5s linear';
	  var delay = (Math.random() * 2);
	  letter.appendChild(document.createTextNode(letters[i]));
	  letter.style.WebKitTransition   = letter.style.transition = style;
	  letter.style.WebKitTransitionDelay   = letter.style.transitionDelay = delay + 's';
	  letter.style.opacity = 1;
	  title_name.appendChild(letter);
	}


	// -------------- -------------- -------------- -------------- -------------- --------------

	var title_therapy = document.getElementById("title_therapy1")
	var letters_title_therapy = title_therapy.textContent.split("")
	while(title_therapy.hasChildNodes()) {
		title_therapy.removeChild(title_therapy.firstChild);
	}


	var letters = letters_title_therapy;

	for(var i = 0; i < letters.length; i++) {
	  var letter = document.createElement('span');
	  var style = 'opacity 1.5s linear';
	  var delay = (Math.random() * 2) + 2;
	  letter.appendChild(document.createTextNode(letters[i]));
	  letter.style.WebKitTransition   = letter.style.transition = style;
	  letter.style.WebKitTransitionDelay   = letter.style.transitionDelay = delay + 's';
	  letter.style.opacity = 1;
	  title_therapy.appendChild(letter);
	}

window.onload = function () {
	// turnAllOff();
	setTimeout(function() {
	  for(var i = 0; i < title_name.childNodes.length; i++) {
	    title_name.childNodes[i].style.opacity = 0;
	  }
	}, 1000);
	
	setTimeout(function() {
	  for(var i = 0; i < title_therapy.childNodes.length; i++) {
	    title_therapy.childNodes[i].style.opacity = 0;
	  }
	}, 1200);

	setTimeout(function() {
		document.getElementById("title_name2").style.opacity = 1;
	},5000);
	setTimeout(function() {
		document.getElementById("title_therapy2").style.opacity = 1;	
	},6000);

	setTimeout(function() {
		 updateView();
		 if (document.getElementById("continue_text").display !== 'hidden') {
		 turnOn("home");
		 };
		}, 9000);
}
// -------------- -------------- -------------- -------------- -------------- --------------

function updateView() {
	if (document.getElementById("continue_text").display !== 'hidden') {
		document.getElementById("card_home").style.opacity = 1;
		document.getElementById("card_home").style.display = '';
	}

	document.getElementById("continue_text").display = "hidden";		
	document.getElementById("continue_text").style.opacity = 0;

	document.getElementById("main").style.height = "0vh";
	document.getElementById("main").style.opacity = 0;
 	
	document.querySelectorAll(".content").forEach((el) => {
		el.style.opacity = "1";
	});
	setTimeout(function() {
		document.getElementById('all').style.position='static';
	},900);
}

// Click on "TO SKIP"
document.getElementById("main").addEventListener("mousedown", ()=>{
	updateView();
	turnOn("home");
});
document.getElementById("main").addEventListener("touchmove", ()=>{
	updateView();
	turnOn("home");
});
document.getElementById("main").addEventListener("scroll", (e)=>{
	updateView();
	turnOn("home");
	preventDefault(e);
});

function turnOff(element) {
	element.style.opacity = 0;
}
function turnOn(element) {
	document.getElementById("card_" + element).style.opacity = 1;
	document.getElementById("card_" + element).style.display = '';
	document.getElementById("nav_" + element).classList.add("nav_selected");
}
function turnAllOff() {
	document.querySelectorAll(".card").forEach(x => {
		x.style.opacity = 0;
		x.style.display = 'none';
	});

	document.querySelectorAll(".nav").forEach(x => {
		x.classList.remove("nav_selected");
	});
}

function turnOffContact() {
	return
	// document.getElementById("card_contact").style.transform = "translateY(1000px)";
}


['home','qualifications','sessions','contact'].forEach( (el) => {
	document.getElementById('nav_'+el).addEventListener('click', () => {
		turnAllOff();
		turnOffContact();
		turnOn(el);
	})
})

document.querySelectorAll(".card").forEach(x => {
	x.style.opacity = 0;
	x.style.display = 'none';
});
function turnOn_home() {
	turnAllOff();
	turnOffContact();
	turnOn("home");
}

function turnOn_treatment() {
	turnAllOff();
	turnOffContact();
	turnOn("treatment");
}

function turnOn_sessions() {
	turnAllOff();
	turnOffContact();
	turnOn("sessions");
}

function turnOn_qualifications() {
	turnAllOff();
	turnOffContact();
	turnOn("qualfications");
}
function turnOn_contact() {
	turnAllOff();
	document.getElementById("card_contact").style.transform = "translateY(0px)";
	turnOn("contact");
}


document.getElementById("main").addEventListener('mousewheel', ()=>{
	if (document.getElementById("continue_text").display !== 'hidden') {
		updateView()
	}

});












	// document.getElementById("title_name").style.transition = "0.5s";
	// document.getElementById("title_name").display = "hidden";
	// document.getElementById("title_name").style.opacity = 0;

	// document.getElementById("title_slogan").style.transition = "0.5s";
	// document.getElementById("title_slogan").display = "hidden";
	// document.getElementById("title_slogan").style.opacity = 0;

	// document.getElementById("title_therapy").style.transition = "0.5s";
	// document.getElementById("title_therapy").display = "hidden";
	// document.getElementById("title_therapy").style.opacity = 0;


	// document.getElementById("continue").display = "hidden";
	// document.getElementById("continue").style.opacity = 0;
