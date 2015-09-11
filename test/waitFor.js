"use strict";

module.exports = function(selector, chain) {
  var wait = setInterval(function(){
    if(document.querySelector(selector)) {
      clearInterval(wait);
      chain();
    }
  },500);
}
