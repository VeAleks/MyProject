$(function() {
 initTabset();
});

function initTabset(){
	var animDuration = 500,
		items = $('.tabset>li>a'),
		prevTab;
	
	items.each(function(){
		var item = $(this),
			newTab = $(item.attr('href'));

		if(item.is('.active')){
			prevTab = newTab;
		}
		else {
			newTab.hide();
		}
	});
	
	items.each(function(){
		var item = $(this),
			newTab = $(item.attr('href'));

		var btnClick = function() {
		item.on('click', function(event){
			event.preventDefault();
			if(!item.is('.active')){
				if(!prevTab.is(':animated')){
					items.removeClass('active');
					item.addClass('active');
					prevTab.fadeOut(animDuration, function(){
						prevTab = newTab;
						newTab.fadeIn(animDuration);
					});
					}

				}
			});
		};
		
		btnClick();
	});
}