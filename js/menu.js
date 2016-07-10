// SMOOTH SCROLL
var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++){
	navbarItems[i].addEventListener('click', function(evt){	

		deleteActiveClass();

		if (Modernizr.classList) {
			this.classList.add('active');
		} else {
			this.classList += ' active';
		}

		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		
		if(sectionToGo.length > 1) {
			evt.preventDefault();
			var goTo = sectionToGo[sectionToGo.length - 1];
			getElementByIdAndScroll(goTo);
		}
	});
}

function getElementByIdAndScroll(name) {
	var elem;
	if (name == '') {
		elem = document.getElementsByClassName('header')[0];
	} else {
		elem = document.getElementById(name);
	}

	scrollToElement(elem);
}

function scrollToElement(element) {
	var jump = parseInt(element.getBoundingClientRect().top * .3);
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout(function() {
			scrollToElement(element);
		}, "60");

	} else {
		element.lastJump = null;
	}
}

// CHANGE ACTIVE ITEM
var cumulativeOffset = function(element) {
	var top = 0;
    do {
        top += element.offsetTop  || 0;
        element = element.offsetParent;
    } while(element);

    return top;
};

var offsetWhoAmI = cumulativeOffset(document.getElementById('who-am-I')) - 50;
var offsetStudies = cumulativeOffset(document.getElementById('studies')) - 50;
var offsetExperience = cumulativeOffset(document.getElementById('experience')) - 50;
var offsetAboutMe = cumulativeOffset(document.getElementById('about-me')) - 50;
var offsetContact = cumulativeOffset(document.getElementById('contact')) - 50;
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(evt){
	var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < offsetWhoAmI) {
		if(!previous) {
			previous = 1;
		} else if (previous == 1) {
			return false;
		}

		navbar.style.backgroundColor = 'rgba(56, 59, 71, 0.92)';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href="#"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href="#"]').parentNode.className += " active";
		}
	} else if (window.pageYOffset >= offsetWhoAmI && window.pageYOffset < offsetStudies){
		if(!previous) {
			previous = 2;
		} else if (previous == 2) {
			return false;
		}
		navbar.style.backgroundColor = 'white';
		deleteActiveClass()
		if (Modernizr.classList) {
			document.querySelector('a[href$="who-am-I"]').parentNode.classList.add("active-reverse");
		} else { 
			document.querySelector('a[href$="who-am-I"]').parentNode.className += " active-reverse";
		}
	} else if (window.pageYOffset >= offsetStudies && window.pageYOffset < offsetExperience){
		if(!previous) {
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		navbar.style.backgroundColor = '#B27700';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="studies"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href$="studies"]').parentNode.className += " active";
		}
	} else if (window.pageYOffset >= offsetExperience && window.pageYOffset < offsetAboutMe){
		if(!previous) {
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		navbar.style.backgroundColor = 'white';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="experience"]').parentNode.classList.add("active-reverse");
		} else {
			document.querySelector('a[href$="experience"]').parentNode.className += " active-reverse";
		}
	} else if (window.pageYOffset >= offsetAboutMe && window.pageYOffset < offsetContact){
		if(!previous) {
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		navbar.style.backgroundColor = '#B27700';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="about-me"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href$="about-me"]').parentNode.className += " active";
		}
	} else if (window.pageYOffset > offsetAboutMe) {
		if(!previous) {
			previous = 1;
		} else if (previous == 1) {
			return false;
		}

		navbar.style.backgroundColor = 'white';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href="#contact]').parentNode.classList.add("active-reverse");
		} else {
			document.querySelector('a[href="#contact"]').parentNode.className += " active-reverse";
		}
	}
}

function deleteActiveClass() {
	for(var i = 0; i < navbarItems.length; i++){
		if (Modernizr.classList) {
			navbarItems[i].classList.remove('active');
			navbarItems[i].classList.remove(' active-reverse');
		} else {
			navbarItems[i].className = 'navbar-item';
		}
	}
}