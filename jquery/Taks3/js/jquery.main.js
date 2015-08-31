$(function(){
	initExpandHolder();
});

function initExpandHolder () {
	var inputs = $(':radio, :checkbox'),
		allHolders = inputs.parent().find('div.rholder');
	
	allHolders.hide();
	inputs.each(function() {
		var item = $(this),
			holder = item.parent().find('div.rholder');

		if(item.is(':checked')){
			holder.show();
		} 
		item.click(function(){
			allHolders.hide();
			holder.show();
		});
	});
}