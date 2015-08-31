$(function() {
	initCarousel();
	initSlideshow();
	initCycleGallery();
});

function initCarousel() {
	$('.carousel').each(function() {
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
			margin,
			pagination = holder.find('.pagination>ul>li');

		function switchSlide() {
			slideset.animate({
				marginLeft: margin
			}, animDuration);
		}

		function changeClass(elem, item) {
			var itemIndex = elem.eq(item);

			elem.removeClass('active');
			itemIndex.addClass('active');
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

		function nextSwitchSlide () {
			var leftNum = parseFloat(slideset.css('marginLeft'));

			if (!slideset.is(':animated')){
				currentNum++;
				ruleActive();
				if (leftNum > (slideWidth - slidesetWidth)){
					margin = leftNum - slideWidth;
				} else {
					margin = 0;
				}
				switchSlide();
			}
		}
		function prevSwitchSlide () {
			var leftNum = parseFloat(slideset.css('marginLeft'));

			if (!slideset.is(':animated')){
				currentNum--;
				ruleActive();
				if (leftNum < 0){
					margin = leftNum + slideWidth;
				} else {
					margin = slideWidth - slidesetWidth;
				}
				switchSlide();
			}
		}

		function autoRotate() {
			ruleActive();
			if (!slideset.is(':animated')){
				nextSwitchSlide();
			}
		}

		slides.each(function(i) {
			var slide = $(this);

			slidesetWidth += slide.width();
			if (slide.is('.active')){
				currentNum = i;
				return currentNum;
			}
		});
		slideset.css('width', slidesetWidth);
		btnNext.on('click', nextSwitchSlide);
		btnPrev.on('click', prevSwitchSlide);
		pagination.each(function(i) {
			var itemPagination = $(this),
				linkPagination = itemPagination.children();

			linkPagination.on('click', function() {
				currentNum = i;
				changeClass(slides, currentNum);
				changeClass(pagination, currentNum);
				margin = -(slides.eq(currentNum).width() * currentNum);
				switchSlide();
			});
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
	});
}

function initSlideshow() {
	$('.slideshow').each(function() {
		var holder = $(this),
			slideset = holder.find('.gmask > ul'),
			slides = slideset.children(),
			btnNext = holder.find('.btn-next'),
			btnPrev = holder.find('.btn-prev'),
			currentNum,
			animDuration = 400,
			rotateDuration = 3000,
			autorotate = false,
			pagination = holder.find('.pagination>ul>li'),
			curSlide,
			newSlide;

		function switchSlide() {
			curSlide.animate({
				opacity: 0
			}, animDuration);

			newSlide.animate({
				opacity: 1
			}, animDuration);
			curSlide = newSlide;
		}

		function changeClass(elem, item) {
			var itemIndex = elem.eq(item);

			elem.removeClass('active');
			itemIndex.addClass('active');
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

		function nextSwitchSlide (elem) {
			if (!elem.is(':animated')){
				currentNum++;
				ruleActive();
				switchSlide();
			}
		}
		function prevSwitchSlide (elem) {
			if (!elem.is(':animated')){
				currentNum--;
				ruleActive();
				switchSlide();
			}
		}

		function autoRotate() {
			ruleActive();
			if (!slides.eq(curSlide).is(':animated')){
				nextSwitchSlide(slides.eq(curSlide));
			}
		}

		slides.css('opacity', 0).each(function(i) {
			var slide = $(this);

			if (slide.is('.active')){
				slide.css('opacity', 1);
				currentNum = i;
				curSlide = $(slides[i]);
				return currentNum;
			}
		});

		btnNext.on('click', function() {
			nextSwitchSlide(slides.eq(curSlide));
		});
		btnPrev.on('click', function() {
			prevSwitchSlide(slides.eq(curSlide));
		});

		pagination.each(function(i) {
			var itemPagination = $(this),
				linkPagination = itemPagination.children();

			linkPagination.on('click', function() {
				currentNum = i;
				changeClass(slides, currentNum);
				changeClass(pagination, currentNum);
				newSlide = slides.eq(currentNum);
				switchSlide();
			});
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
	});
}

function initCycleGallery() {
	$('.cycle').each(function() {
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
			rotateDuration = 5000,
			rotate = true,
			margin,
			nextSlide,
			curSlide,
			prevSlide,
			startRotate,
			pagination = holder.find('.pagination>ul>li');

		function switchSlide() {
			slideset.stop().animate({
				marginLeft: margin
			}, animDuration, function() {
				slideset.css('marginLeft', 0);
				findSlides(currentNum);
				slidesPosition();
				if (rotate) {
					startAutoRotate();
				}
			});
		}

		function changeClass(elem, item) {
			var itemIndex = elem.eq(item);

			elem.removeClass('active');
			itemIndex.addClass('active');
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

		function nextSwitchSlide () {
			if (!slideset.is(':animated')){
				currentNum++;
				ruleActive();
				margin = -slideWidth;
				switchSlide();
				stopAutoRotate();
			}
		}

		function prevSwitchSlide () {
			if (!slideset.is(':animated')){
				currentNum--;
				ruleActive();
				margin =  slideWidth;
				switchSlide();
				stopAutoRotate();
			}
		}

		function autoRotate () {
			ruleActive();
			nextSwitchSlide();
		}

		function findSlides(currentNum) {
			curSlide = slides.eq(currentNum);
			nextSlide = slides.eq(currentNum + 1);
			prevSlide = slides.eq(currentNum - 1);
			if (currentNum === slides.length - 1){
				nextSlide = slides.eq(0);
			}
			else if (currentNum === 0){
				prevSlide = slides.eq(currentNum - 1);
			}
		}

		function slidesPosition () {
			slides.css({
				position: 'absolute',
				top: -999999,
				left: -999999
			});
			curSlide.css({
				top: 0,
				left: 0
			});
			nextSlide.css({
				top: 0,
				left: nextSlide.width()
			});
			prevSlide.css({
				top: 0,
				left: -prevSlide.width()
			});
		}

		function switchSlideAfterClick(toIndex) {
			var oldNumber = currentNum;

			currentNum = toIndex;
			if (oldNumber < toIndex){
				margin = -slideWidth;
				nextSlide.css({
					top: -999999,
					left: -999999
				});
				nextSlide = slides.eq(toIndex);
				nextSlide.css({
					top: 0,
					left: nextSlide.width()
				});
			}
			else if (oldNumber > toIndex){
				margin = slideWidth;
				prevSlide.css({
					top: -999999,
					left: -999999
				});
				prevSlide = slides.eq(toIndex);
				prevSlide.css({
					top: 0,
					left: -prevSlide.width()
				});
			}
			else {
				return false;
			}
		}

		function stopAutoRotate () {
			holder.addClass('disable-autorotate');
			holder.removeClass('enable-autorotate');
			clearInterval(startRotate);
		}

		function startAutoRotate () {
			holder.removeClass('disable-autorotate');
			holder.addClass('enable-autorotate');
			startRotate = setInterval(autoRotate, rotateDuration);
		}

		slides.each(function(i) {
			var slide = $(this);

			slidesetWidth += slide.width();
			if (slide.is('.active')){
				currentNum = i;
				return currentNum;
			}
		});
		slideset.css('position', 'relative');
		findSlides(currentNum);
		slidesPosition();
		btnNext.on('click', nextSwitchSlide);
		btnPrev.on('click', prevSwitchSlide);
		pagination.each(function(i) {
			var itemPagination = $(this),
				linkPagination = itemPagination.children();

			if (!slideset.is(':animated')){
				linkPagination.on('click', function() {
					switchSlideAfterClick(i);
					changeClass(slides, i);
					changeClass(pagination, i);
					stopAutoRotate();
					slideset.stop().animate({
						marginLeft: margin
					}, animDuration, function() {
						slideset.css('marginLeft', 0);
						findSlides(i);
						slidesPosition();
						if (rotate) {
							startAutoRotate();
						}
					});
				});
			}
		});
		if (rotate) {
			startAutoRotate();
		}
	});
}