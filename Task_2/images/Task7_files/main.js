'use strict';
function unitPage() {
	var arrayHolders = document.getElementsByClassName('holder');

	for (var i = 0; i < arrayHolders.length; i++) {
		var holder = arrayHolders[i];
			// btnClick = function (element, active){
			// 	if(element.addEventListener) element.addEventListener('click', addClass(element, active), false);
			// 	else if(element.attachEvent) element.attachEvent('onclick', addClass(element, active));
			// };
		console.log(holder.className);
		addClass(holder, 'active');
		hasClass(holder, 'active');
		removeClass(holder, 'active');

		// for (var j = 0; j < holder.children.length; j++) {
		// 	var child = holder.children[j];
			
		// 	// if(child.className === 'button'){
		// 	// 	btnClick(holder, 'active');
		// 	// }
		// }
	}
}

function addClass(elem, cname) {
	if (elem.className === '') elem.className += cname;
	else elem.className += ' ' + cname;
}

function hasClass(elem, cname) {
	var newArray = elem.className.split(' ');
	for (var i = newArray.length; i >=0; i--){
		if(newArray[i] === 'cname'){
			newArray[i] = '';
		}
	}
	newArray.join('');
}

function addClass(elem, cname) {
	elem.className += ' ' + cname;
}



function removeClass(elem, cname) {
	if(hasClass(elem, cname) === true){
		
	}
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);