'use strict';
function unitPage() {
	var arrayHolders = document.getElementsByClassName('holder');

	for (var i = 0; i< arrayHolders.length; i++) {
		var holder = arrayHolders[i];

		console.log(holder);
		if(holder){

		}
		for (var j = 0; j < holder.children.length; j++) {
			var child = holder.children[j],
			btnClick = function (element, active){
				if(child.addEventListener) child.addEventListener('click', addClass(element, active), false);
				else if(child.attachEvent) child.attachEvent('onclick', addClass(element, active));
			};
			
			if(child.className === 'button'){
				btnClick(holder, 'active');

			}
		}
	}
}

function addClass(elem, cname) {
	return function(){
		var hasClass = function (elem, cname) {
			var newArray = elem.className.split(' ');

			for (var i = 0; i < newArray.length; i++){
				if(newArray[i] === cname){
					return true;
				}
			}
			newArray.join('');
		};

		hasClass(elem, cname);
		if(hasClass(elem, cname) === true) elem.className = elem.className.replace(' ' + cname, '');
		else {
			elem.className += ' ' + cname;
			for (var j = 0; j < elem.children.length; j++){
				console.log(elem, elem.children[j]);
				if(elem.children[j] === 'box'){
					console.log(4);
					elem.children[j].style.display = 'block';
				}
			}
			
		}
	}
}

// function addClass(elem, cname) {
// 	if (elem.className === '') elem.className += cname;
// 	else elem.className += ' ' + cname;
// }

// function hasClass(elem, cname) {
// 	var newArray = elem.className.split(' ');

// 	for (var i = 0; i < newArray.length; i++){
// 		if(newArray[i] === cname){
// 			return true;
// 		}
// 	}
// 	newArray.join('');
// }

// function removeClass(elem, cname) {
// 	if(hasClass(elem, cname) === true){
// 		elem.className = elem.className.replace(cname, '');
// 	}
// }



if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);