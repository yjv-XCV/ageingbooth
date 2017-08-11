$(document).ready(function(){

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
		        width: { max: 1120 },
		        height: { max: 840 }
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

		var upload_image_data = function(filetype, imgdata) {
		  var b64Data = imgdata.replace('data:image/' + filetype + ';base64,', '');
		  var contentType = 'image/' + filetype;
		  var blob = b64toBlob(b64Data, contentType);
		  var fd = new FormData();
		  var image_id = 'image' + new Date().getTime() + '.' + filetype;
		  fd.append('fname', image_id);
		  fd.append('data', blob);

		  if (imgdata != null) {
		    $.ajax({
		      type: 'POST',
		      url: '/assets/saveOriginal.php',
		      data: fd,
		      processData: false,
		      contentType: false,
		      success: function (msg) {
		        console.log(msg);
		      },
		      error: function(xhr, status, msg) {
		        console.log(status);
		        console.log(msg);
		      }
		    });
		  }
		  return image_id;
		}


		var take_snapshot_from_cam_stream = function(filetype, quality){

		  var cam_stream = $('#cam-stream');
		  var snap_canvas = $('#snap-canvas'),
		      context = snap_canvas[0].getContext('2d');

		  var width = 1120;//video.videoWidth,
		      height = 840;//video.videoHeight;

		  // Setup a canvas with the same dimensions as the video.
		  snap_canvas[0].width = height;
		  snap_canvas[0].height = width;

		  // Make a copy of the current frame in the video on the canvas.
		  context.translate(height/2, width/2);
		  context.rotate(Math.PI/2);
		  context.scale(-1,-1);
		  context.drawImage(cam_stream[0], -width/2, -height/2, width, height);

		  $('#sec02').hide();
		  $('#sec03').show();
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


	var buttons = function() {
		$('#sec01').on('click'/*Tap*/,function() {
			$('#sec01').hide();
			$('#sec02').show();	
			$('#snap').show();
		});

		$('.home').on('click', function(){
			$('.myModal').fadeTo(500,0.7);
		});

		$('#quit').on('click', function(){
			$('section').hide();
			$('.myModal').hide();
			$('#sec01').show();
		});

		$('#cancel').on('click', function(){
			$('.myModal').fadeOut(500);
		});

		$('.myModal').on('click', function(){
			$('.myModal').fadeOut(500);
		});

		$('#snap').click(function(e){

		    e.preventDefault();

		    $('#snap').hide();
		    // console.log('3');
		    // setTimeout(function(){ console.log('2'); }, 1000);
		    // setTimeout(function(){ console.log('1'); }, 2000);

		    setTimeout(function(){
		      $('#count321').text('');
		      snap = take_snapshot_from_cam_stream('jpeg');
		      image_id =  upload_image_data('jpeg', snap);

		      // video.pause();
		    }, 100);
		  });
	};

	$(init_cam);
	$(buttons);

});