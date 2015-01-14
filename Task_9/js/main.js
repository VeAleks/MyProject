'use strict';
function unitPage() {
	var gallery = document.getElementById('gallery'),
		slideset = gallery.children,
		button = document.getElementById('btn'),
		second = 1200,
		a =  displayMessage(slideset, second);

	searchClass(slideset, 'active');
	buttonClick(button, displayMessage(slideset, second));
	buttonClick(button, displayMessage(slideset, second));
}

function searchClass(element, cname) {
	var hasClass = function (element, cname) {
			var newArray = element.className.split(' ');

			for (var i = 0; i < newArray.length; i++){
				if(newArray[i] === cname) return true;
				else return false
			}
			newArray.join('');
		},
		addClass = function(element, cname) {
			hasClass(element, cname);
			if(hasClass(element, cname) === true) element.className = element.className.replace(' ' + cname, '');
			else element.className += ' ' + cname;
		};

	for (var i = 0; i < element.length; i++) {
		console.log(element[i]);
		if (hasClass === false) addClass(element[0], cname);
	}
}

function displayMessage(element, sec) {
	var hasClass = function (element, cname) {
			var newArray = element.className.split(' ');
			console.log(newArray);

			for (var i = 0; i < newArray.length; i++){
				if(newArray[i] === cname) {
					newArray.slice(i);
				}
			}
			newArray.join('');
		};

	return function(){
		var timer = setInterval(function(){
			for (var i = 0; i< element.length; i++) {
				var item = element[i],
					nextItem =element[i=i+1];
				
				hasClass(item, 'active');
				
				
				console.log(element[i]);
			}
			//console.log(element);
		}, sec);
	}
}

function buttonClick(element, func) {
	if(element.addEventListener) {
		element.addEventListener('click', func, false);
		if (element.addEventListener){
		element.addEventListener('click', func, false);

		}
	}
	else if(element.attachEvent) element.attachEvent('onclick', func);
}




if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);