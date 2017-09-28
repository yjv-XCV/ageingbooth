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
      url: './assets/saveOriginal.php',
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

    // Update the images path
    $.ajax({
          type: 'GET',
          url: './assets/develop.php',
          processData: false,
          contentType: false,
          success: function (data, msg) {
            console.log(msg);
            image_paths = JSON.parse(data);
          },
          error: function(xhr, status, msg) {
            console.log(status);
            console.log(msg);
          }
        }); 
  }
  return image_id;
}