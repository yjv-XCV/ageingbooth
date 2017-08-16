var x=[0,1,8,10,15];
var flippingPhoto = setInterval(function(){
						for(var i=1; i<=4; ++i){
							$('.shape#id' + x[i]).shape('flip back',1000);
							x[i] = parseInt(Math.random()*100);
							x[i] = x[i]>=17? (x[i]%16 + 1):x[i];
						}
					},1000);
$(function(){

	$(flippingPhoto);


});