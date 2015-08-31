$(function() {
	initDropDownFade();
	initDropDownSlide();
});

function initDropDownFade(){
	var list = $('.fade'),
		holder = $(list.find('li')),
		animDuration = 400;

	holder.each(function(){
		var item = $(this),
			drop = $(item.find('>ul'));

		function rolloverItem (){
			if(item.is('.hover')){
				drop.css('display', 'block').stop().animate({
					opacity: 1
				}, animDuration);
			}
			if(!item.is('.hover')) {
				drop.stop().animate({
					opacity: 0
				}, animDuration, function(){
					drop.css('display', 'none');
				});
			}
		}

		drop.hide().css('opacity', 0);
		item.on({
			mouseenter: function() {
				item.addClass('hover');
				if(item.children().is(drop)){
					rolloverItem();
				}
			},
			mouseleave: function() {
				item.removeClass('hover');
				if(item.children().is(drop)){
					rolloverItem();
				}
			}
		});
	});
}

function initDropDownSlide(){
	var list = $('.slide'),
		holder = $(list.find('li')),
		animDuration = 300;

	holder.each(function(){
		var item = $(this),
			drop = $(item.find('.drop>ul')),
			dropHeight = drop.height() + 1;

		function rolloverItem (){
			if(item.is('.hover')){
				drop.css('display', 'block').stop().animate({
					marginTop: 0
				}, animDuration);
			}
			if(!item.is('.hover')) {
				drop.stop().animate({
					marginTop: - dropHeight
				}, animDuration, function(){
					drop.css('display', 'none');
				});
			}
		}

		drop.css('marginTop', - dropHeight);
		item.on({
			mouseenter: function() {
				item.addClass('hover');
				if(item.children().is('.drop')){
					rolloverItem();
				}
			},
			mouseleave: function() {
				item.removeClass('hover');
				if(item.children().is('.drop')){
					rolloverItem();
				}
			}
		});
	});
}