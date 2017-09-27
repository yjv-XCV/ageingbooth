var init_cam = function() {

		  // getUserMedia init
		  navigator.getMedia = ( navigator.getUserMedia ||
		                        navigator.webkitGetUserMedia ||
		                        navigator.mozGetUserMedia ||
		                        navigator.msGetUserMedia);

		  if(!navigator.getMedia){
		    alert("Your browser doesn't have support for the navigator.getUserMedia interface.");
		  }

		  // getUserMedia
		  navigator.getMedia(
		    {
		      video: {
		        width: { max: 1012 },
		        height: { max: 740 }
		      }
		    },
		    function(stream){
		      var cam = $('#cam-stream');
		      cam.attr('src', window.URL.createObjectURL(stream));
		      cam[0].play();
		    },
		    // Error Callback
		    function(err){
		      alert("There was an error with accessing the camera stream: " + err.name, err);
		    }
		  );
		};

var take_snapshot_from_cam_stream = function(filetype, quality){

  var cam_stream = $('#cam-stream');
  var snap_canvas = $('#snap-canvas'),
  	  snap_canvas2 = $('#image'),
      context = snap_canvas[0].getContext('2d'),
      context2 = snap_canvas2[0].getContext('2d');

  var width = 1012;//video.videoWidth,
      height = 740;//video.videoHeight;

  // Setup a canvas with the same dimensions as the video.
  snap_canvas[0].width = height;
  snap_canvas[0].height = width;

  snap_canvas2[0].width = height;
  snap_canvas2[0].height = width;


  // Make a copy of the current frame in the video on the canvas.
  context.translate(height/2, width/2);
  context.rotate(Math.PI/2);
  context.scale(-1,-1);
  context.drawImage(cam_stream[0], -width/2, -height/2, width, height);

  context2.translate(height/2, width/2);
  context2.rotate(Math.PI/2);
  context2.scale(-1,-1);
  context2.drawImage(cam_stream[0], -width/2, -height/2, width, height);

  // Turn the canvas image into a dataURL that can be used as a src for our photo.
  return snap_canvas[0].toDataURL('image/' + filetype, quality);
};

var b64toBlob = function(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }
    
  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

var original_half = function(){

  var cam_stream = $('#cam-stream');

  var half = $('#half-face'),
      context = half[0].getContext('2d');

  var width = 1012;//video.videoWidth,
      height = 740;//video.videoHeight;

  // Setup a canvas with the same dimensions as the video.
  half[0].width = height/2;
  half[0].height = width;

  // Make a copy of the current frame in the video on the canvas.
  context.translate(height/2, width/2);
  context.rotate(Math.PI/2);
  context.scale(-1,-1);
  context.drawImage(cam_stream[0], 0, 0, width, height/3, -width/2, -height/2, width*1.55, height*0.50);

}
