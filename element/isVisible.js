"use strict";


function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

   return (
      rect.bottom >= 0
      && rect.right >= 0
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


module.exports = function(element){
    if (element.offsetWidth === 0 || element.offsetHeight === 0) return false;

   /* var height = document.documentElement.clientHeight,
        on_top = function(r) {
          var x = (r.left + r.right)/2, y = Math.max(0, (r.top + r.bottom)/2);
          return element.contains( document.elementFromPoint(x, y) );
        };
    */

    var in_viewport = isElementInViewport(element);
    return in_viewport;
};
