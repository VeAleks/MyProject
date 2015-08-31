function initGallery() {
	var gallery = document.getElementById('gallery'),
		button =  document.getElementById('btn'),
		delay = 500,
		oldBtnText = button.innerHTML,
		currentNumber,
		timer,
		array = gallery.children;

	var findActiveSlide = function(element) {
		for (var i = 0; i < element.length; i++) {
			if(element[i].classList.contains('active')){
				currentNumber = i;
				return currentNumber;
			}
		}
	};

	var startAutorotate = function () {
		button.innerHTML = 'STOP';
		gallery.classList.remove('disable-autorotation');
		gallery.classList.add('enable-autorotation');
		return timer = setInterval(nextSlide, delay);
	};

	var stopAutorotate = function() {
		button.innerHTML = oldBtnText;
		gallery.classList.remove('enable-autorotation');
		gallery.classList.add('disable-autorotation');
		clearInterval(timer);
	};

	var nextSlide  = function() {
		array[currentNumber].classList.remove('active');
		array[currentNumber].style.display ='none';
		currentNumber++;
		if(currentNumber === array.length) {
			currentNumber = 0;
		}
		array[currentNumber].classList.add('active');
		array[currentNumber].style.display ='block';
	};

	var initRotate = function() {
		if(gallery.classList.contains('disable-autorotation')) {
			startAutorotate();
		}
		else if(gallery.classList.contains('enable-autorotation')) {
			stopAutorotate();
		}
	};

	if (!findActiveSlide(array)) {
		array[0].classList.add('active');
		currentNumber = 0;
	}
	if(!gallery.classList.contains('enable-autorotation')) {
		gallery.classList.add('disable-autorotation');
	}
	else if (gallery.classList.contains('enable-autorotation')) {
		startAutorotate();
	}
	for (var i = 0; i < array.length; i++) {
		array[i].style.display='none';
	}
	array[currentNumber].style.display='block';

	if (button.addEventListener) button.addEventListener('click', initRotate, false);
	else if (button.attachEvent) button.attachEvent('onclick', initRotate);

}

if(window.addEventListener) window.addEventListener('load', initGallery, false);
else if(window.attachEvent) window.attachEvent('onload', initGallery);