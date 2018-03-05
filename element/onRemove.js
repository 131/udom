"use strict";

const  removeAll = require('mout/array/removeAll');
const  detach    = require('nyks/function/detach');

var  checkDom = [];

const  scanRemoved = function() {
  if(!checkDom.length)
    return;

  checkDom.slice().forEach(function(check) {
    if(document.documentElement.contains(check.dom))
      return;

    removeAll(checkDom, check);
    detach(check.cb).call();
  });
};

var observer = new MutationObserver(scanRemoved);

observer.observe(document.documentElement, {
  childList : true,
  subtree   : true
});

module.exports = function(dom, cb) {
  checkDom.push({dom, cb});
};
