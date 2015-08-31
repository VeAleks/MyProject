$(function() {
	initClearInputs();
});

function initClearInputs() {
	$('input[type="text"], textarea').each(function() {
		var currentInput = $(this),
			defaultText = currentInput.val();
	
		currentInput.on('focus', function() {
			if(currentInput.val() === defaultText){
				currentInput.val('');
			}
		});
		currentInput.on('blur', function() {
			if(currentInput.val() === ''){
				currentInput.val(defaultText);
			}
		});
	});
}