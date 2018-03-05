"use strict";

const isVisible = require('../isVisible');

module.exports = function(selector, chain) {
  var wait = setInterval(function() {
    var element = document.querySelector(selector);
    if(element && isVisible(element)) {
      clearInterval(wait);
      chain();
    }
  }, 500);
};
