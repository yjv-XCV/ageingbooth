var last_render = function() {
  var overlay = $('#age-overlay canvas')[0],
      image = $('#image')[0],
      last = $('#last')[0];
  if(typeof ageing.overlay1 != "undefined")ageing.overlay1.alpha = 0.6;
  if(typeof ageing.overlay2 != "undefined")ageing.overlay2.alpha = 0.6;
  if(typeof ageing.overlay3 != "undefined")ageing.overlay3.alpha = 0.6;

  var app = new PIXI.Application(740, 1012, { view: last, forceCanvas: true, transparent: true });


  faceFromCanvas = new PIXI.Sprite(PIXI.Texture.fromCanvas(image));
  overlayFromCanvas = new PIXI.Sprite(PIXI.Texture.fromCanvas(overlay));

  app.stage.addChild(faceFromCanvas);
  app.stage.addChild(overlayFromCanvas);
  app.renderer.render(app.stage);
  
}

var last = {
  render : function(){
    var overlay = $('#age-overlay canvas')[0],
        image = $('#image')[0],
        last = $('#last')[0];

    this.app = new PIXI.Application(740, 1012, { view: last, forceCanvas: true, transparent: true });

    if(typeof ageing.overlay != "undefined")ageing.overlay.alpha = 1;

    faceFromCanvas = new PIXI.Sprite(PIXI.Texture.fromCanvas(image));
    overlayFromCanvas = new PIXI.Sprite(PIXI.Texture.fromCanvas(overlay));

    this.app.stage.addChild(faceFromCanvas);
    this.app.stage.addChild(overlayFromCanvas);
    this.app.renderer.render(this.app.stage);
  },
  snap : function(fileType, quality){
    return this.app.view.toDataURL('image/' + fileType, quality);
  }
}