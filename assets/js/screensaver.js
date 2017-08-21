i = 0;
var flippingPhoto = setInterval(function(){
						$('.shape#id' + ++i).shape('flip back',1000);
						i %= 16;
					},500);
$(function(){

	$(flippingPhoto);


});