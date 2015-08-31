$(function() {
	initOpenClose();
	initAccordion();
});

function initOpenClose() {
	$('.open-close').each(function() {
		var container = $(this),
			button = container.find('a.opener'),
			drop = container.find('.slide'),
			animDuration  = 500;

		if(container.hasClass('active')){
			drop.show();
		}
		else {
			drop.hide();
		}
		button.on('click', function() {
			if(!container.hasClass('active')){
				container.addClass('active');
				drop.slideDown(animDuration);
			}
			else{
				container.removeClass('active');
				drop.slideUp(animDuration);
			}
		});
	});
}

function initAccordion() {
	$('.accordion li').each(function() {
		var container = $(this),
			button = container.find('>a'),
			drop = container.find('>ul'),
			animDuration  = 500;

		if(container.hasClass('active')){
			drop.show();
		}
		else {
			drop.hide();
		}
		button.on('click', function() {
			if(!container.hasClass('active')){
				container.parent().find('li').removeClass('active').find('>ul').slideUp(animDuration);
				container.addClass('active');
				drop.slideDown(animDuration);
			}
			else{
				container.removeClass('active');
				drop.slideUp(animDuration);
			}
		});
	});
}