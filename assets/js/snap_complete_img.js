var last_snap = function(filetype, quality) {
	var overlay = $('#age-overlay canvas')[0],
		  image = $('#image')[0],
		  last = $('#last')[0];

  var app = new PIXI.Application(740, 1012, { view: last, antialias: true, forceCanvas: true, transparent: true });

  if(typeof ageing.overlay != "undefined")ageing.overlay.alpha = 0.3;

  faceFromCanvas = new PIXI.Sprite(PIXI.Texture.fromCanvas(image));
  overlayFromCanvas = new PIXI.Sprite(PIXI.Texture.fromCanvas(overlay));

  app.stage.addChild(faceFromCanvas);
  app.stage.addChild(overlayFromCanvas);

  app.renderer.render(app.stage);

  return app.view.toDataURL('image/' + filetype, quality);
}