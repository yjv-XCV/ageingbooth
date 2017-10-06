var homeFlag = 1;
var inactivity;
var startInactivity = function(){
	inactivity = setTimeout(function(){
					$(homepage);
				},60000);
	}
var stopInactivity = function(){
	clearTimeout(inactivity);
}

$(function(){
	$(document).on('click', function(){
			if(!homeFlag){
				$(stopInactivity);
				$(startInactivity);
			}
		});
});