$(function() {
	initOpenClose();
});

function initOpenClose() {
	$('.box').each(function() {
		var container = $(this),
			button = container.find('a.button'),
			drop = container.find('.element');
		
		button.on('click', function() {
			if(container.hasClass('opened')) {
				container.removeClass('opened');
				drop.css({background:'none'});
			} else {
				container.addClass('opened');
				drop.css({background: 'red'});
			}
		});
	});
}