i = 0;
imgae_ids = [];

var flippingPhoto = setInterval(function(){
						number = parseInt(Math.random()*1000);
						number = number % 11 + 2;
						number = number < 10 ? '0' + number : number;
						path = 'imgs/original/0' + number + '.png';
						$('.shape#id' + ++i).shape('flip back',1000);
						$('.shape#id' + i).children().children('.active').siblings().children('img').attr('src', path);
						i %= 16;
					},500);


$(function(){
	var outputCanvas = document.getElementById('output'),
	output = outputCanvas.getContext('2d'),
	bufferCanvas = document.getElementById('buffer'),
	buffer = bufferCanvas.getContext('2d'),
	video = document.getElementById('screensaver'),
	alpha = document.getElementById('alpha'),
	width = outputCanvas.width,
	height = outputCanvas.height,interval;
	 
	function processFrame() {
	    buffer.drawImage(video, 0, 0);
	    buffer.drawImage(alpha, 0, height);
	 
	        // this can be done without alphaData, except in Firefox which doesn't like it when image is bigger than the canvas
	    var image = buffer.getImageData(0, 0, width, height),
	    imageData = image.data,
	    alphaData = buffer.getImageData(0, height, width, height).data;
	 
	    for (var i = 3, len = imageData.length; i < len; i = i + 4) {
	    imageData[i] = alphaData[i-1];
	    }
	 
	    output.putImageData(image, 0, 0, 0, 0, width, height);
	    }

	setInterval(function(){
	    processFrame();
	},1000);
});