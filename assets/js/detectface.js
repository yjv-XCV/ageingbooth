var ctracker;
var image_cc,overlay_cc;
  /**
   * ctrack
   */
var ctracker = new clm.tracker({stopOnConvergence : true});
    ctracker.init();

var drawLoop = function(t){
  // console.log(t);
  requestAnimFrame(drawLoop);
  ctracker.draw($('#dev-overlay')[0]);
}
var detect_face = function(box){

    // TRACK IMAGE
    // ctracker.start($('#image')[0]);

    // DRAW RECT
    overlay_cc.lineWidth="6";
    overlay_cc.rect(box[0], box[1], box[2], box[3]);
    overlay_cc.stroke();

    // TRACK RECT
    ctracker.start($('#dev-image')[0], box);


    // DRAW LOOP
    requestAnimFrame(drawLoop);
  }

$(function(){

  image_cc = $('#dev-image')[0].getContext('2d');
  overlay_cc = $('#dev-overlay')[0].getContext('2d');
  var drawRequest;

  /**
   * load image into canvas
   */
  var image_img = new Image();
  $(image_img).load(function() {
    image_cc.drawImage(image_img, 0, 0, image_img.width, image_img.height);
  });
  image_img.src = 'imgs/original/001.jpeg';





  // $('#overlay').click(function(e) {
  //   zz.cs.getCursorPosition($('#image')[0], e);
  // });


  // detect if tracker fails to find a face
  document.addEventListener("clmtrackrNotFound", function(event) {
    ctracker.stop();
    alert("The tracking had problems with finding a face in this image. Try selecting the face in the image manually.")
  }, false);

  // detect if tracker loses tracking of face
  document.addEventListener("clmtrackrLost", function(event) {
    ctracker.stop();
    alert("The tracking had problems converging on a face in this image. Try selecting the face in the image manually.")
  }, false);

  // detect if tracker has converged
  document.addEventListener("clmtrackrConverged", function(event) {
    alert('Converged!');
    console.log('ctracker.getCurrentPosition()');
    console.log(ctracker.getCurrentPosition());
    console.log('ctracker.getCurrentParameters()');
    console.log(ctracker.getCurrentParameters());
    console.log('ctracker.getScore()');
    console.log(ctracker.getScore());
    // stop drawloop
    cancelRequestAnimFrame(drawRequest);
  }, false);

  // update stats on iteration
  document.addEventListener("clmtrackrIteration", function(event) {
    // stats.update();
  }, false);

});

