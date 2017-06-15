"use strict";

/*
function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

   return (
      rect.bottom >= 0
      && rect.right >= 0
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}*/


module.exports = function(element){
  if (element.offsetWidth === 0 || element.offsetHeight === 0) return false;

  var height = root.documentElement.clientHeight;
  var rects = element.getClientRects();
  var on_top = function(r) {
    var x = (r.left + r.right)/2, y = (r.top + r.bottom)/2;
    return element.contains( root.elementFromPoint(x, y) );
  };

  for (var i = 0, l = rects.length; i < l; i++) {
    var r = rects[i];
    var in_viewport = r.top > 0 ? r.top <= height : (r.bottom > 0 && r.bottom <= height);
    if (in_viewport && on_top(r)) return true;
  }
  return false;
};
