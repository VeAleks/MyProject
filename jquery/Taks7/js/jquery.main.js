$(function() {
	initCustomCheckbox();
});

function initCustomCheckbox(){
	$('input[type="checkbox"]').each(function(){
		var checkbox = $(this),
			fakeCheckbox =  $('<span class="checkbox-area"/>').insertBefore(checkbox);

		function redrawCheckbox(){
			if(checkbox.is(':checked')) {
				fakeCheckbox.addClass('checkbox-area-checked');
			} else {
				fakeCheckbox.removeClass('checkbox-area-checked');
			}
		}

		redrawCheckbox();
		checkbox.on('click', redrawCheckbox);
		fakeCheckbox.on('click', function(){
			if(fakeCheckbox.hasClass('checkbox-area-checked')) {
				checkbox.prop('checked', false);
			} else {
				checkbox.prop('checked', true);
			}
			redrawCheckbox();
		});
	});
}