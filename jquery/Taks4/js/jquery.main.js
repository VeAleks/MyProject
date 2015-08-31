$(function(){
	initTooltip();
});

function initTooltip() {
	var tooltip = $('<div id="tooltip">').appendTo('body');

	$('a[title]').each(function(i) {
		var item = $(this),
			title = item.attr('title');

		item.removeAttr('title').on({
			mouseenter: function() {
				tooltip.text(title).show();
			},
			mousemove: function(e) {
				tooltip.css({
					position: 'absolute',
					top: e.pageY,
					left: e.pageX,
					marginLeft: 20
				});
			},	
			mouseleave: function(){
				tooltip.hide();
			}
		});
	});
}