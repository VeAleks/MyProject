'use strict';
function unitPage() {
	var childBoxes = document.getElementById('holder').children;

	for (var i = 0; i < childBoxes.length; i++){
		var itemBox = childBoxes[i];

		hasClass(itemBox, 'element');
		removeClass(itemBox, 'element');
		addClass(itemBox, 'element');
	}
}

function addClass(elem, cname) {
	if (elem.className === '') elem.className += cname ;
	else elem.className += ' ' + cname ;
}

function hasClass(elem, cname) {
	var	newArray = elem.className.split(' ');

	for (var i = 0; i < newArray.length; i++){
		if(newArray[i] === cname){
			return true;
		}
	}
	newArray.join('');
}

function removeClass(elem, cname) {
	if(hasClass(elem, cname) === true){
		elem.className = elem.className.replace(cname, '');
	}
}



if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);