'use strict';
function unitPage() {
	var visualHolder = document.getElementById('visual'),
		array = visualHolder.innerHTML.split(';'),
		getRandomArbitary = function (min, max){
			return Math.floor(Math.random() * (max - min) + min);
		},
		numImg = getRandomArbitary(0, array.length),
		image,
		imageUrl = array[numImg];

	visualHolder.innerHTML = '';
	image = visualHolder.appendChild(document.createElement('img'));
	image.src = imageUrl;
}

if(window.addEventListener) window.addEventListener('load', unitPage, false);
else if(window.attachEvent) window.attachEvent('onload', unitPage);