var capture_final_image = function(filetype, quality){

  // var cam_stream = $('#cam-stream');
  // var snap_canvas = $('#snap-canvas'),
      // context = snap_canvas[0].getContext('2d');

  var width = 1012;//video.videoWidth,
      height = 740;//video.videoHeight;

  // Setup a canvas with the same dimensions as the video.
  snap_canvas[0].width = height;
  snap_canvas[0].height = width;

  snap_canvas2[0].width = height;
  snap_canvas2[0].height = width;


  // Make a copy of the current frame in the video on the canvas.
  context.translate(height/2, width/2);
  context.drawImage(cam_stream[0], -width/2, -height/2, width, height);

  // Turn the canvas image into a dataURL that can be used as a src for our photo.
  return snap_canvas[0].toDataURL('image/' + filetype, quality);
};