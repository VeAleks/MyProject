
function unitPage() {
	var slideset = document.getElementById('gallery').children,
		button = document.getElementById('btn'),
		delay = 1000,
		currentIndex;

	addClassFirstItem(slideset, 'active');
	btnClick(button, move(button, delay, 'btn-active'));
	console.dir(button);
	console.log(button.innerText);
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
	if(hasClass(elem, cname) === true){
		elem.className = elem.className.replace(cname, '');
	}
}

function move (button, delay, btnClass) {
	return function () {
		btnTextChange(button, 'STOP')
		var timer = setTimeout(
			function run(){
				console.log('hello');
				timer = setTimeout(run, delay);
				if(btnClick(button, move())){
					return clearTimeout(timer);

				}
			}
			, delay);
		//addClass(button, btnClass);
		//		});
		//var timerOur = clearTimeout(timer);

		//;
		//console.log('155');
			// removeClass(button, btnClass);
			// clearTimeout(timer);
		}
	}

	//btnClick(element, clearTimeout(timer));


function btnTextChange (element, btnText){
	element.innerText = btnText;
}

function btnClick(element, func){
	if (element.addEventListener) element.addEventListener('click', func, false);
	else if (element.attachEvent) element.attachEvent('onclick', func);
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);