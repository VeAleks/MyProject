
function unitPage() {
	var slideset = document.getElementById('gallery').children,
		button = document.getElementById('btn');
		delay = 1000;

	hasClass(slideset);
	if(hasClass(slideset) !== true){
		slideset[0].className = 'active';
	}

	setInterval(
		function () {
			var  currentIndex;
			
			if(hasClass(slideset) === true){
				console.log(slideset);
				for (var i = 0; i < slideset.length; i++) {
					console.log(slideset[i].className);

					if (slideset[i].className === 'active') {
						currentIndex = i;
						nextIndex = i + 1;
					//	arr = arr.join(slideset[i].className);
						slideset[i].className = slideset[i].className.replace('active', '');
					}


				};
				console.log(currentIndex);
				//var arr2 = slideset.slice(0, currentIndex );
				
			}
		}, delay);
}

function hasClass (element) {
	for (var i = 0; i < element.length; i++) {
		if (element[i].className === 'active') return true;
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