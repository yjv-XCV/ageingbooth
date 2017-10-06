$(function(){
  var image_cc = $('#cam-stream')[0].getContext('2d');

  /**
   * load image into canvas
   */
  var image_img = new Image();
  $(image_img).load(function() {
    image_cc.drawImage(image_img, 0, 0, 840, 1120);
  });
  image_img.src = 'imgs/original/image1506523138886.jpeg';

  var i = 0;
  $('#cam-stream').on('click', function(){
    image_img.src = image_paths[i++];
    i %= image_paths.length - 3;
  });
});