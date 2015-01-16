
function unitPage() {
	var slideset = document.getElementById('gallery').children,
		button = document.getElementById('btn'),
		delay = 1000,
		firstClassActive = slideset[0].className,
		currentIndex;

	
		addClassFirstItem(slideset, 'active');

	// 	setInterval(
	// 		function () {
	// 			if(hasClass(slideset) === true){
	// 				console.log(slideset);
	// 				for (var i = 0; i < slideset.length; i++) {
	// 					console.log(slideset[i].className);

	// 					if (slideset[i].className === 'active') {
	// 						currentIndex = i;
	// 						nextIndex = i + 1;
	// 					//	arr = arr.join(slideset[i].className);
	// 						slideset[i].className = slideset[i].className.replace('active', '');
	// 					}


	// 				};
	// 				console.log(currentIndex);
	// 				//var arr2 = slideset.slice(0, currentIndex );
					
	// 			}
	// 		}, delay);
}

function searchClass (element, cname) {
	for (var i = 0; i < element.length; i++) {
		var child = element[i],
		result = false;
	//	console.log(child);

		hasClass(child, cname);
		if (hasClass(child, cname) === true) {
			result = true;
		//	console.log('return', hasClass(child, cname));
			break;
		}
	}
	return result;
}

function addClassFirstItem (element, cnum) {
	searchClass (element, cnum);
	if(searchClass (element, cnum) !== true){
		if(element[0].className =='')element[0].className += '' + cnum;
		else element[0].className += ' ' + cnum;
	}
}

function hasClass(elem, cname) {
	var	newArray = elem.className.split(' '),
		result = false;
	
	for (var i = 0; i < newArray.length; i++){
	//	console.log(i, newArray[i]);
		if(newArray[i] === cname){
			result =  true;
		}
	}
	newArray.join('');
	return result;
}

function addClass(elem, cname) {
	if (elem.className = '') {
		elem.className += '' + cname;
	} else elem.className += ' ' + cname;
}

function removeClass(elem, cname) {

	if(hasClass(elem, cname) === true){
		elem.className = elem.className.replace(cname, '');
	}
}

function changeClass (argument) {
	
}


function btnClick(func){
	if (click.addEventListener) click.addEventListener('click', func, false);
	else if (click.attachEvent) click.attachEvent('onclick', func);
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);