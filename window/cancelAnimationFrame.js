"use strict";

module.exports = (function(){
  return  window.cancelAnimationFrame ||
          window.webkitCancelAnimationFrame ||
          window.mozCancelAnimationFrame
})();
