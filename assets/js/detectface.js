var tcs;
var ctracker;
var image_cc,overlay_cc;
  /**
   * ctrack
   */
var ctracker = new clm.tracker({stopOnConvergence : true});
    ctracker.init();

var drawLoop = function(t){
  console.log(t);
  requestAnimFrame(drawLoop);
  overlay_cc.clearRect(0,0,840, 1120);
  ctracker.draw($('#overlay')[0]);
}

var detect_face = function(box){

    // DRAW RECT
    // overlay_cc.lineWidth="6";
    // overlay_cc.rect(box[0], box[1], box[2], box[3]);
    // overlay_cc.stroke();

    // TRACK RECT
    ctracker.start($('#image')[0], box);

    // DRAW LOOP
    // requestAnimFrame(drawLoop);
  }

$(function(){

  image_cc = $('#image')[0].getContext('2d');
  overlay_cc = $('#overlay')[0].getContext('2d');
  var drawRequest;

 // detect if tracker fails to find a face
  document.addEventListener("clmtrackrNotFound", function(event) {
    console.log(ctracker.getScore() + ' not found.');
    ctracker.stop();
    ageing.launch();
    uv.launch();
    smoking.launch();
    setTimeout(function(){
      showpage($('#page4'));
    }, 2000);
  }, false);

  // detect if tracker loses tracking of face
  document.addEventListener("clmtrackrLost", function(event) {
    console.log(ctracker.getScore() + ' lost.');
    ctracker.stop();
    ageing.launch();
    uv.launch();
    smoking.launch();
    setTimeout(function(){
      showpage($('#page4'));
    }, 2000);
  }, false);

  // detect if tracker has converged
  document.addEventListener("clmtrackrConverged", function(event) {
    // alert('Converged!');
    console.log(ctracker.getScore() + ' success.');
    tcs = ctracker.getCurrentPosition();
    ctracker.stop();
    ageing.launch();
    uv.launch();
    smoking.launch();
    setTimeout(function(){
      showpage($('#page4'));
    }, 2000);
  }, false);

});

