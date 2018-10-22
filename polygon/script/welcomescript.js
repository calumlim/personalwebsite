var topleft=$('#topleft-triangle');
var topright=$("#topright-triangle");
var bottomleft=$('#bottomleft-triangle');
var bottomright=$("#bottomright-triangle");

var layer=$('html');

layer.mousemove(function(e){
var valueX=((e.pageX * -1 / 30)+5);
var valueY=((e.pageY * -1 / 30));
var valueX2 = ((e.pageX*1/30)-5);
var valueY2 = ((e.pageY*1/30));

  topleft.css({
    'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
      });
  topright.css({
    'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
  })
  bottomleft.css({
    'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
  })
  bottomright.css({
    'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
  })
  $("#name").css({
    'transform':'translate3d('+valueX2+'px,'+valueY2+'px,0)'
  })
  $("#name").css({
    'font-size':+50+valueY2+'px'
  })


});
