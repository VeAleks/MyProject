function initStickySlider() {
	var stickySlider = document.getElementById('slider'),
		holder = document.getElementById('content'),
		sliderHeight = holder.offsetHeight + holder.offsetTop - stickySlider.offsetHeight;
	
	var	scrollHandler = function() {
		if(window.scrollY > holder.offsetTop && window.scrollY < sliderHeight) {
			stickySlider.style.position = 'fixed';
			stickySlider.style.left = holder.offsetLeft + 'px';
			stickySlider.style.bottom = 'auto';
			stickySlider.style.top = '0';
			//stickySlider.style.cssText = 'position:fixed; left:' + holder.offsetLeft + 'px; bottom:auto; top:0;';
		}
		else if(window.scrollY >= sliderHeight) {
			stickySlider.style.position = '';
			stickySlider.style.left = '';
			stickySlider.style.bottom = '0';
			stickySlider.style.top = 'auto';
			//stickySlider.style.cssText = 'bottom:0; top:auto;';
		}
		else {
			stickySlider.style.position = '';
			stickySlider.style.left = '';
			//stickySlider.style.cssText = '';
		}
	};
		
	if(window.addEventListener) window.addEventListener('scroll', scrollHandler , false);
	else if(window.attachEvent) window.attachEvent('onscroll', scrollHandler );
}

if(window.addEventListener) window.addEventListener('load', initStickySlider, false);
else if(window.attachEvent) window.attachEvent('onload', initStickySlider);