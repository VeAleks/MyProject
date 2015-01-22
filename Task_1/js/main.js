'use strict';
function unitPage() {
	var childBoxes = document.getElementById('holder').children;

	for(var i = 0; i < childBoxes.length; i++){
		addClass( childBoxes[i], 'element');
	}
}

function addClass(elem, cname) {
	var newArray = elem.className.split(' ');

	if(!hasClass(elem, cname)) {
		newArray.push(cname);
	}
	elem.className = newArray.join(' ');
}

function hasClass(elem, cname) {
	var newArray = elem.className.split(' ');

	for (var i = 0; i < newArray.length; i++){
		if(newArray[i] === cname){
			return true;
		}
	}
}

function removeClass(elem, cname) {
	var newArray = elem.className.split(' ');

	if (hasClass(elem, cname)) {
		for (var i = newArray.length - 1; i >= 0; i--) {
			if (newArray[i] === cname){
				newArray.splice(i, 1);
			}
		}
		elem.className = newArray.join(' ');
	}
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);