var app = new PIXI.Application({
    'width' : 840,
    'height' : 1120
});

$(function(){
    $('.model').html(app.view);
    $('.model canvas').attr('id','model');
});

var ratio = 8;
var line = new PIXI.Graphics();
line.lineStyle(4, 0xFFFFFF, 1);
line.moveTo(0, 0);
for(var i in pModel.path.normal) {
    console.log('line ' + i);

    for(var j in pModel.path.normal[i]) {
        var n = pModel.path.normal[i][j];
        console.log(n);
        var p = pModel.shapeModel.meanShape[n];
        console.log(p);

        line.lineTo(p[0]*ratio-25, p[1]*ratio+220);
    }
}
app.stage.addChild(line);