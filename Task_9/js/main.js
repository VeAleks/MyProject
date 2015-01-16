'use strict';
function unitPage() {
	var slideset = document.getElementById('gallery').children,
		slide;
	for (var i = 0; i < slideset.length; i++) {
		hasClass(slideset[i], 'active');
	
		if (hasClass(slideset[i], 'active') === true){
		} else addClass(slideset[0], 'active');
	}
	//button = document.getElementById('btn'),
	//second = 1200;
	//a =  displayMessage(slideset, second);
	//buttonClick(button, displayMessage(slideset, second));
}

function hasClass(element, cname) {
	var newArray = element.className.split(' ');

	for (var i = 0; i < newArray.length; i++){
		console.log(newArray[i]);
		if(newArray[i] === cname) return true;
	}
	newArray.join('');
}

function addClass(element, cname) {
	hasClass(element, cname);
	if(hasClass(element, cname) === true) element.className = element.className.replace(' ' + cname, '');
	else{
		if(element.className ==='')element.className += '' + cname;
		else element.className += ' ' + cname;
	}
}

function displayMessage(element, sec) {
	return function(){
			var timer = setInterval(function(){

				for (var i = 0; i < element.length; i++) {


					var nextElement = element[i+1];
					var activeElement = element[i];
					//element[i].className += ' ' + 'active';
					//newArray.splice(i,1);
					//console.log(newArray);
						
						activeElement.className = activeElement.className.replace(' ' + 'active', '');
						nextElement.className += ' ' + 'active';
						
						
						// element[i].className += ' ' + 'active';
					//	console.log(element[i].className);
					

				}
				
		
		}, sec);
	}
}

function buttonClick(element, func) {
	if(element.addEventListener) element.addEventListener('click', func, false);
	else if(element.attachEvent) element.attachEvent('onclick', func);
}




if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);