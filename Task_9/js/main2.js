
function unitPage() {
	var slideset = document.getElementById('gallery').children,
		parent = document.getElementById('gallery'),
		button = document.getElementById('btn'),
		delay = 1000,
		rotateActive = 'rotate-enable',
		rotateNotActive = 'rotate-disable',
		currentIndex;

	
	addClassFirstItem(slideset, 'active');
	btnClick(button, move(button, delay, parent, rotateActive, rotateNotActive));

}

function addClassFirstItem (element, cname) {
	searchClass (element, cname);
	if(searchClass (element, cname) !== true){
		addClass(element[0], cname);
	}
}

function searchClass (element, cname) {
	for (var i = 0; i < element.length; i++) {
		var child = element[i],
			result = false;

		hasClass(child, cname);
		if (hasClass(child, cname) === true) {
			result = true;
			break;
		}
	}
	return result;
}

function hasClass(element, cname) {
	var	newArray = element.className.split(' '),
		result = false;
	
	for (var i = 0; i < newArray.length; i++){
		if(newArray[i] === cname) result =  true;
	}
	newArray.join('');
	return result;
}

function addClass(element, cname) {
	if (element.className == '') element.className += '' + cname;
	else element.className += ' ' + cname;
}

function removeClass(elem, cname) {
	if(hasClass(elem, cname) == true){
		elem.className = elem.className.replace(' ' + cname, '');
		console.log('1q1q1');
	} else if(hasClass(elem, cname) === false){
		elem.className = elem.className.replace(''+ cname, '');
		console.log('2q2q2');
	}
}

function move (element, delay, parent, rotateActive, rotateNotActive) {
	var timer;
	var sdsd = function(){
			console.log('hello');
			setTimeout(sdsd, delay);

		};
		
		searchClass(parent, rotateActive);
		searchClass(parent, rotateNotActive);
		if(searchClass(parent, rotateActive) !== true && searchClass(parent, rotateNotActive)  !== true){
	//		addClass(parent , rotateNotActive);
		}
		
		//btnTextChange(element, 'STOP');
	return function (){
			//hasClass(parent , rotateNotActive);
			//hasClass(parent , rotateActive);
			console.log(hasClass(parent , rotateNotActive));
		//	addClass(parent , rotateNotActive);
		if(hasClass(parent , rotateActive) === true){
			console.log('2222');
			addClass(parent , rotateNotActive);
			removeClass(parent , rotateActive);
			btnTextChange(element, 'PLAY');
			timer = clearTimeout(sdsd);
		}
		else if(hasClass(parent , rotateNotActive ) === true){
			addClass(parent , rotateActive);
			console.log('delelteee');
			removeClass(parent , rotateNotActive);
			console.log('delelteee2');
			btnTextChange(element, 'STOP');
			timer = setTimeout(sdsd, delay);
			console.log('111');
		}
		return timer;
	}
}



function btnTextChange (element, btnText){
	element.innerHTML = btnText;
}

function btnClick(element, func){
	if (element.addEventListener) element.addEventListener('click', func, false);
	else if (element.attachEvent) element.attachEvent('onclick', func);

}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);