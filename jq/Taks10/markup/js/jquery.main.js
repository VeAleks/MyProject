$(function() {
	initCarousel();
	//initSlideshow();
	//initCycleGallery();
});

function initCarousel(){
	var holders = $('.gallery-holder');
	
	holders.each(function() {
		var holder = $(this),
			mask = holder.find('.gmask'),
			slideset = mask.find('ul'),
			slides = slideset.children(),
			btnNext = holder.find('.btn-next'),
			btnPrev = holder.find('.btn-prev'),
			currentNum,
			slideWidth = mask.width(),
			slidesetWidth = 0,
			animDuration = 400,
			rotateDuration = 3000,
			autorotate = false,
			pagination = holder.find('.pagination>ul>li');

		function animNext() {
			var leftNum = parseFloat(slideset.css('margin-left'));

			if (leftNum > (slideWidth - slidesetWidth)){
				slideset.animate({
					marginLeft: leftNum - slideWidth
				}, animDuration);
			} else {
				slideset.animate({
					marginLeft: 0
				}, animDuration);
			}
		}
		function animPrev() {
			var leftNum = parseFloat(slideset.css('margin-left'));

			if (leftNum < 0){
				slideset.animate({
					marginLeft: leftNum + slideWidth
				}, animDuration);
			} else {
				slideset.animate({
					marginLeft: slideWidth - slidesetWidth
				}, animDuration);
			}
		}
		function changeClass(elem, item) {
			elem.removeClass('active');
			$(elem[item]).addClass('active');
		}

		function ruleActive() {
			if (currentNum === slides.length){
				currentNum = 0;
			}
			if (currentNum < 0) {
				currentNum = slides.length - 1;
			}
			changeClass(slides, currentNum);
			changeClass(pagination, currentNum);
		}

		function autoRotate() {
			animNext();
			currentNum++;
			ruleActive();
		}

		slides.each(function(i) {
			var slide = $(this);

			slidesetWidth += slide.width();
			if (slide.is('.active')) {
				currentNum = i;
				return currentNum;
			}
		});
		slideset.css('width', slidesetWidth );
		btnNext.on('click', function(){
			if(!slideset.is(':animated')){
				currentNum++;
				ruleActive();
				animNext();
			}
		});
		btnPrev.on('click', function(){
			if(!slideset.is(':animated')){
				currentNum--;
				ruleActive();
				animPrev();
			}
		});
		if(autorotate){
			holder.removeClass('disable-autorotate');
			holder.addClass('enable-autorotate');
			setInterval(autoRotate, rotateDuration);
		}
		else{
			holder.addClass('disable-autorotate');
			holder.removeClass('enable-autorotate');
		}		
	});
}

function initSlideshow() {
	var holder = $('.slideshow'),
		mask = holder.find('.gmask'),
		slideset = mask.find('ul'),
		slides = slideset.children(),
		btnNext = holder.find('.btn-next'),
		btnPrev = holder.find('.btn-prev'),
		currentNum,
		animDuration = 400,
		rotateDuration = 3000,
		autorotate = false,
		pagination = holder.find('.pagination>ul>li'),
		curClide,
		newSlide;

	function animSlide() {
		curClide.animate({
			opacity: 0
		}, animDuration);

		newSlide.animate({
			opacity: 1
		}, animDuration);
		curClide = newSlide;
	}

	function changeClass(elem, item) {
		elem.removeClass('active');
		$(elem[item]).addClass('active');
	}

	function ruleActive() {
		if (currentNum === slides.length){
			currentNum = 0;
		}
		if (currentNum < 0) {
			currentNum = slides.length - 1;
		}
		changeClass(slides, currentNum);
		changeClass(pagination, currentNum);
		newSlide = $(slides[currentNum]);
	}

	function autoRotate() {
		animSlide();
		currentNum++;
		ruleActive();
	}

	slides.css('opacity', 0).each(function(i) {
		var slide = $(this);

		if (slide.is('.active')){
			slide.css('opacity', 1);
			currentNum = i;
			curClide = $(slides[i]);
			return currentNum;
		}
	});
	btnNext.on('click', function() {
		if (!slideset.is(':animated')){
			currentNum++;
			ruleActive();
			animSlide();
		}
	});
	btnPrev.on('click', function() {
		if (!slideset.is(':animated')){
			currentNum--;
			ruleActive();
			animSlide();
		}
	});
	if (autorotate){
		holder.removeClass('disable-autorotate');
		holder.addClass('enable-autorotate');
		setInterval(autoRotate, rotateDuration);
	}
	else {
		holder.addClass('disable-autorotate');
		holder.removeClass('enable-autorotate');
	}
}

function initSlideshow() {
	var holder = $('.slideshow'),
		mask = holder.find('.gmask'),
		slideset = mask.find('ul'),
		slides = slideset.children(),
		btnNext = holder.find('.btn-next'),
		btnPrev = holder.find('.btn-prev'),
		currentNum,
		animDuration = 400,
		rotateDuration = 3000,
		autorotate = false,
		pagination = holder.find('.pagination>ul>li'),
		curClide,
		newSlide;

	function animSlide() {
		curClide.animate({
			opacity: 0
		}, animDuration);

		newSlide.animate({
			opacity: 1
		}, animDuration);
		curClide = newSlide;
	}

	function changeClass(elem, item) {
		elem.removeClass('active');
		$(elem[item]).addClass('active');
	}

	function ruleActive() {
		if (currentNum === slides.length){
			currentNum = 0;
		}
		if (currentNum < 0) {
			currentNum = slides.length - 1;
		}
		changeClass(slides, currentNum);
		changeClass(pagination, currentNum);
		newSlide = $(slides[currentNum]);
	}

	function autoRotate() {
		currentNum++;
		ruleActive();
		animSlide();
	}

	slides.css('opacity', 0).each(function(i) {
		var slide = $(this);

		if (slide.is('.active')){
			slide.css('opacity', 1);
			currentNum = i;
			curClide = $(slides[i]);
			return currentNum;
		}
	});
	btnNext.on('click', function() {
		if (!slideset.is(':animated')){
			currentNum++;
			ruleActive();
			animSlide();
		}
	});
	btnPrev.on('click', function() {
		if (!slideset.is(':animated')){
			currentNum--;
			ruleActive();
			animSlide();
		}
	});
	if (autorotate){
		holder.removeClass('disable-autorotate');
		holder.addClass('enable-autorotate');
		setInterval(autoRotate, rotateDuration);
	}
	else {
		holder.addClass('disable-autorotate');
		holder.removeClass('enable-autorotate');
	}
}
