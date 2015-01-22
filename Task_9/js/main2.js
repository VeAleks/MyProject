
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
	console.log(hasClass(elem, cname));
	if (elem.className == ''){
		elem.className = elem.className.replace(cname, '');
		
	} else {
		elem.className = elem.className.replace( ' '+ cname, '');
		console.log('2q2q2');
	}
}

function move (element, delay, parent, rotateActive, rotateNotActive) {
	var timer;
	var sdsd = function(){
			console.log('hello');
			setTimeout(sdsd, delay);
			clearTimeout(timer);
		};
		
		hasClass(parent , rotateActive )
		hasClass(parent , rotateNotActive )
		if(searchClass(parent, rotateActive) !== true && searchClass(parent, rotateNotActive)  !== true){
			addClass(parent , rotateNotActive);
		}
	return function (){
		
		if(hasClass(parent , rotateNotActive ) === true){
			removeClass(parent , rotateNotActive);
			parent.className = parent.className.replace(rotateNotActive, '');
			console.log(parent.className);
			addClass(parent , rotateActive);
			//parent.className = parent.className.replace(rotateNotActive, '');
			
			btnTextChange(element, 'STOP');
			timer = setTimeout(sdsd, delay);
			console.log('rotate on');
		}
		else if(hasClass(parent , rotateActive) === true){
			if (parent.className === '') parent.className = parent.className.replace(' ' + rotateActive, '');
			else parent.className = parent.className.replace(' ' + rotateActive, '');
		//	parent.className = parent.className.replace(rotateActive, '');

			addClass(parent , rotateNotActive);
			btnTextChange(element, 'PLAY');
			timer = clearTimeout(sdsd);
			console.log('rotate off');
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