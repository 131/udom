"use strict";

var  removeAll = require('mout/array/removeAll');
var  detach    = require('nyks/function/detach');

var  checkDom = [];

var  scanRemoved = function() {
  if(!checkDom.length)
    return;

  checkDom.slice().forEach(function(check, k) {
    if(document.documentElement.contains(check.dom))
      return;

    removeAll(checkDom, check);
    detach(check.cb).call();
  });
};


var observer = new MutationObserver(scanRemoved);

observer.observe(document.documentElement, {
  childList : true,
  subtree : true
});


module.exports = function(dom, cb) {
  checkDom.push({dom, cb});
}