$(document).ready(function() {

// controller
// upload_image_data(
//   'jpeg',
//   take_snapshot_from_cam_stream('jpeg', 0.7)
// );



function upload_image_data(filetype, imgdata) {
  var b64Data = imgdata.replace('data:image/' + filetype + ';base64,', '');

  var contentType = 'image/' + filetype;
  var blob = b64toBlob(b64Data, contentType);
  var fd = new FormData();
  var puzzle_id = 'puzzle' + new Date().getTime() + '.' + filetype;
  fd.append('fname', puzzle_id);
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
  return puzzle_id;
}


function take_snapshot_from_cam_stream(filetype, quality){

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
  context.drawImage(cam_stream[0], -width/2, -height/2, width, height);

  // Turn the canvas image into a dataURL that can be used as a src for our photo.
  return snap_canvas[0].toDataURL('image/' + filetype, quality);
}


function b64toBlob(b64Data, contentType, sliceSize) {
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


});