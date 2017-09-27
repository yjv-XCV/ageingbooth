var last_snap = function(filetype, quality) {
	var overlay = $('#overlay')[0],
		image = $('#image')[0],
		last = $('#last')[0],
		last_cc = last.getContext('2d');

  var width = 740,//video.videoWidth,
      height = 1012;//video.videoHeight;

  last.width = width;
  last.height = height;

  // Make a copy of the current frame in the video on the canvas.
  last_cc.translate(width/2, height/2);
  last_cc.drawImage(overlay, -width/2, -height/2, width, height);
  last_cc.drawImage(image, -width/2, -height/2, width, height);

  // Turn the canvas image into a dataURL that can be used as a src for our photo.
  return last.toDataURL('image/' + filetype, quality);
}