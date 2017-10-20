var homeFlag = 1;
var inactivity;
var startInactivity = function(){
	console.log('start');
	inactivity = setTimeout(function(){
					$(homepage);
				},60000);
	}
var stopInactivity = function(){
	console.log('pause');
	clearTimeout(inactivity);
}

var resetInactivity = function(){
	if(!homeFlag){
				$(stopInactivity);
				$(startInactivity);
			}
}

$(function(){
	$(document).on('click', function(){
		$(resetInactivity);
	});

	$('canvas').on('click', function(){
		$(resetInactivity);
	});

});